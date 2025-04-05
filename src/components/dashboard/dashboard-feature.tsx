/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2k8aFs4uZYZ4ppDfAzfnvp8rGxvVfuxSSmEALc7aufhWS5NFMYYhCjRqSb4ox9wsvCD9CD54QqmyDEaY4nANgy3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S83V7YUf1Ph1mt7BeAjtFHe6PCsyXM9v9bQy1tJt7Mw1tQ2RLrqz1apaJgGrNSwXFqCvkuLq98PR8w2vfACZ8NN",
  "key1": "4eTp38WQhB29ocNAr6CP5JdceZcytQFeuPgxUZSKAY9q3DK8LkwKCdv2rZKcPGhCYWAHCD4LAWvLJjRsDc26CaD5",
  "key2": "5Ehou2ArYJHZHdghcm6YEsKYK4CPq6KG4QqSjUN4CP4vuoPKtUJWcYMsFoNV8ZPV8Qy1AMpcLuysLwbNfg8fJWwo",
  "key3": "3s2JHQpcM2aETT6G5eeo2gHnaHbPYb9AY39nJD4uExcQssqbE7CKuv6KCeGBT36tdPwvz35sod6VgXVBoxfaB8g3",
  "key4": "EKSuT11poLemzKYJ84u82KRxJfVbDb1d5edgoVCeGTHAMhgr7F1gRxTJaFU64LJugsp4UZ9iiThyfTs59tz4CHQ",
  "key5": "5JPzjgixkjY82Ufi7AeK3oEC69SUJeriPF1SvUiXXESXpTQukpsyt3g68SVayW3RoVKtQApYbM1ybPHVAbUS5CKd",
  "key6": "5Y8h3TwLgbUiu5njVC6d7bJf7fyrtXxXr68BazmpKZTaqHTBGmAmLaYqG9fLr7EkLWKkNEZ8WfuVBovEiWSmxdC",
  "key7": "5tVxkc5oH1uTM9Nn1ba2u45b4ZaQKMwVWEqhe1LbWVi8LuNNcyJk893JJRUojBVuVFPtmqgx5Pfqiv2xgnmyk6nC",
  "key8": "kddskaoBAdHUvLW4f2B1kL1QvEWhz6ksoW6LgYu3PqkCRg1quLBAXeJdwZkKSsNTSdxzG7WP5x9ALtceKjUcRjy",
  "key9": "25jtPZGAvDiJKEVrmyjSCZpE4gmLBjRvnMUvXzrnZsVuY6ewEVL4nysWv75RALHQeV9y81VV8dZhVhbqJ4Vk2qRi",
  "key10": "3KRgSUjuQp7DXkUwC7HVNJSSXjkphJAtKC8hpqWFjkiXgFuNyBUDu45XYVm3QmsQFjdSMN4Wcizo2CfSp58Bz6Nf",
  "key11": "365L9xtGTPkw8LTEyuxzuo2FZ3ViK5TbPbWAvXFZbRSCZXZbG3M3ULTi5o1Tn9mgdRD3DS1pjA91EoLGHHHGVciE",
  "key12": "3T5zmRf94PiHverLddV4W643WvqohB6CdrDtfktEMPb33fVKex4GcFK74yGt7sx89i1yFruwiokt3orucUAbHYPS",
  "key13": "2Uru3rN1wHiw1scDETHXJyoJF8FTFXkPPyJLoctbrU1PnhXLU6MC1VgwPYJtTM6rPA27mQtW231NdnzTKfQEceJM",
  "key14": "2jTcHQdhw8zBrSn1tmNA1HaJv76UaqNr4Bn44m8ejZWbLeW3xUCCcUtwPwL5Ak4U7vSJrZss4xLCG1o2LGf9ihfq",
  "key15": "5WHmXAd6LLu4ea1aEDJejnFvBxRtnjTcThzYwPK8JJF6wzd8RfATBtJUTvqqN2gAbFFUMrt6Vy1tFXRcEG7NBUU5",
  "key16": "4d2tZ8ecTJxMWiM4bk6eAiewk5XPYfm53L6dszxgpsPFRa3fMVCnxPhoZXHKftVYzHNyJoGA7h9NduRJFZMKiKP4",
  "key17": "3Vka1gCBvxm9r1eu7BXXDkxVz7gvhFqEPom8PdcT47BufBK2LFaYXwaMQt7NeGnoAmazvAzFDJn5fuy9R5rnBqtV",
  "key18": "2eb7EjyVf3WdT3qTCMAnRLz6u9q4pAi9h4FsyijebisCdcjuNbh7DninNQN5JKzJ6m1xpmbn19Jq2rXS6KcC3C2A",
  "key19": "wKPWsZx3zBjgtXx3PVKs1u24GRHtkKThWQKqHh47n91BsfngrDN8STYH1xgcfHntWCyKUAG4G7iSiYbsuW7Corz",
  "key20": "3YiPYKdUinCLN3mCjNSEcSfPyFkjmvmic7V3gzKPnujtjwU6ruNbmXzWRnCZXGHkZtipJEv7XNEDZK5RaGQbZfvE",
  "key21": "2RzikP7XmVMPyfv8ELcdhtf4d87jV5YepihbymG1UzDRzKxX9MkyWfPbK2Gq2cYmTXQQJhqH8Vxsqux9RBry45jc",
  "key22": "5cqZ1Ftv1pnnRGhvgw5XcwZrmmh5HTFumbjiF5M5mNwy8xah6vbkxcw8vzRR2ffcikc7uaDY98JuTBAkwPPUbtQ2",
  "key23": "AmCLKNka4WMLxYn61JGS3tAjUyLU8HWKhW2Us6L2r6rA5wNYKVPx2q85LM531BRzGMUVpsxGq7tFwNrcmAWG3GX",
  "key24": "3B6GfSNkYNC3wAkLJbAsFPtf74jzsXKW5tAKJYDA1svoqUbSGz326uXFXm9eMp5A4L93PaAMZKEJYNxUYy8Ffau1",
  "key25": "SXtLzYt4VQ6idUqziNgqaT6UxRi7sEVjksxHri9PxaWUgh6NvrdaRVFg6PoiGRbiGL7RooZh2gwjaEBNejqsop6",
  "key26": "eyCuEK2XtfFmxLm5RzgnMdWs8Xy5kKbdjmFa5Hk8BzGPKwYb1VFLpy9JSzaxTAb8psvbvig1AiatW7bhuRkjkqm",
  "key27": "WxapFpRR5KM7UhV2Lxk6sxgiLbhp4b9qiZTZfm939v1QycVhmQFgdgVnRW9koRWXUpXU14F47BdHJLdBj3857vE",
  "key28": "471FY4tkTaw2Pt7MYErWXPrMPtypBBV8g8own3peMAN2YtuQo2uq4ukMWBgfKfVBqvTzEmKdghBuDMtqUu3r4NDd",
  "key29": "3gZLTMJNeDx3n769D6fcPCWNakTxJp5zasLGyZM6URijbGNbWKFWqzj1Ln5jAAcqUy7c2wMe94WzmL9nYrLEmrKs",
  "key30": "2fXysp2HKi7ZC38NrBJT1SiXX9qpXQyHWNBYwBv33ZFYqVEFKqaQbd47r95fcERyxu7onZUGp1CsTmjCHGxVyELj",
  "key31": "2rgK7cMaWX1PS9ZjXHLCeSyAcS9M59Hc2gJzSig7v1dJXY56V71Q3TybQjwFduZV7DQiwv7fJYi5tKUUYxBUACbZ",
  "key32": "2QCgNCpCHyGyM8UtxHv3qwJtXzfzBQHLoc66ocBzUKe7Jh4RpB2e2G8uPGirJtEbUgFEPUuk2DEedxUHsuFVj4XG",
  "key33": "3BKAh5vPfZwtEgSHcjiJNpfLJkgNyTugcJXJ8sQV3vDFdQkuXFVbjh1WrWmFLR72XtDi3a9bsfJJfTnpHEZ9qkkL"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
