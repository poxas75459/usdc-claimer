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
    "4pfVNnn5zWwu2ZTaw4aD6CuNjjY9oXdS5ZvfJvmYLbdXsKqxn6BPRFN2koRsSkSQbVXqLjKssM4arn7jj5kWSzNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ba3SmxXZiGyV9VWPhRcTzJM1X6MN9oC82cGyU5A6gtyEY7wVhHBPsich5wswcTPR5AbgaHha5qeuwWQdZhMA19B",
  "key1": "52dCe8WiivmUEnhmYaAK1nBLw6QWo4r7oa8eXKVp9sSoXitNTcgK4aoz3dWkrvTfzEcmZh2N9riZHxVwAgSvszHV",
  "key2": "RopCrLYvbCwYqLMvn7tppMuMJb1nMiW7iD3pwX5L3BYXh52BqxV12CqJyrR38N2eC7vd5SdmGbDNxZXRw2kJAYH",
  "key3": "4qaLCSVgV92PY3qhZoC2xtnT3vzMZbdNdYkYnV4cPEJeuafoSVExmiULSX98xm746Gp1MoC1Du9P9VcLAjx3cerm",
  "key4": "J6ytxoXQAZergjbWgrr5BuDTunzX2ftGHhcF672NXrTo5bfNwDhqWjDemnZKpk6gM3LTmQndzB2bYt4hQLATMsp",
  "key5": "36YJgXdKgMoHf2R71tpvoHhr2H5NYxCYQrSCLFa7DaFxn1uLPVKgWVnmLcMvrPzKKawcg6gXX5ywdDoUWQCNcCuJ",
  "key6": "2UVJdhS3uYBoG3JLH8PF7Y1ZL2pt5ytW6fTetLXTgQh3GeZKxhwqryLvcSPUJLctv3XC7TaxLNSeFaPjff6ivJtb",
  "key7": "442FDEpMy5xp1q8hM8DgL1LsPYp1HxVGKJPTFSuXVN6UAdXoVxH6xQLbwT6pFmoGeKuNYkxmTXy3P4utyT8hMrge",
  "key8": "5yKsnwhdf4g8FFFE1fcw9q1XNDsefuxoYxBihabtrmYYfT8jPuMskv67iVdHWBY57UGBY8x2gScbUGrkjieduXUH",
  "key9": "2CLgEkdeM4v5zMsav2ZFqYWxS1xFuSq16Kcg6CW1nqZPJ3Xhoh8WJ8mTbQ2n4ML8HuibV6CtsYN51LcgGYUAGq5g",
  "key10": "4BHPDdmrLdULXs5Zt5yYzBAo9ZR2rQjRFmEJRTdV7CVWiaTahGPPv1Vah3Ts1i2zQuZk4zpaZkFbYegbihx4dghY",
  "key11": "5wbGdoaYVs9stMd1SUYrk4H2hX2Dzy7dUiSkUJDSSn5HvGY5ZEyXgQC2gHmmzvxJeWNT28XmnRrmGGj7vtdGQAa3",
  "key12": "5q4HtjjWEPWLqLqN4BromZikqRXrRcf9YA8KT8dndE2jouQ6TXMrjZwQfSKnjG4VVukjW6Vx6A8QC1ie2SCkQRqw",
  "key13": "2J5rP7a28tTAAs2tzSFJuo3LJbPxMpZPNuAdkAZVKK32hCeJJpR2iK3rzMwaheu4RT4T2n3gA6wFzFaXHPoyHqPQ",
  "key14": "3gpGsDoFuxArhkQMWghN6ncQfFTC3cGwa3GHaTcZvCY5RsftaTzHpm4p2KGnBJbpwx6LDzpETKWCapoRdZHwHLNN",
  "key15": "4MwRshXks5TmkkbNrJvX6QdefUh4KbpkLv2QWkYrbcLd65RyziT6UAn7AMdvPpmiDvcdBhr4PS52Jx61BWzJouor",
  "key16": "62iHe5VqzoP3pqGh2hTT3CCjvmKNVF7c2vwWv4L6kAG8LKFrE1vGcK3idSpT2dNWpiBtxpn8yQNrWEp1StzaVP6p",
  "key17": "F8qHyShjT4vFA6RhXZnjsTg7xjoLRRDHgXVX3bBCscS7LYQZ3gMVr799rvXo8zbL1L9yenkJ4YmQa2iYZ5xDCvN",
  "key18": "5fDzLxPNuC6MoH8hA3cCW9bUDsUA4XVSQAsb9vvSoTbpc4GNxdMpm8PnG5EhkouUTjA8PNJaFbkraeawtXCKZ1WE",
  "key19": "2jAQcUKK8s8rVMqXaofMHmY8VonHQ58NMhh6RstyWzLoyR5aUKKqJnrZtmYmPt3gWefwU2XMRawBPvuEkEy7Ewjy",
  "key20": "46LLmKfhw1dWR9aEqZ5sBx7NLtraQ7h8j3sokQvBk4zSyQdUeBzV9EBRHurCnwwtFBoDF7K9hYkFZkNvsiWQYYGe",
  "key21": "EAbNeB7Df9UV5bpu7w3ujmDoQAFGQFXnSxHJKrAbAE31B3kZN54x1TugFASgijpYoRNmkd6WmBNzG5S6A2kHDPK",
  "key22": "5qtwGsK8oX3nXai8NDFLwoNu9Cncsh3pVi4KSNDiEifKtkukVwQgaU84PC3xbvgttKmFGapgbuNnuX535jqoyBwG",
  "key23": "4gFkSDDFh7dCUy3BGVqvEmQgwhinNUJpMN8W8vWfAuRXKFoBNBXcQVzMS9o7KVXwaWJd4mW67PNNNiTPxP4djGdb",
  "key24": "2sZd7enaxmgDHBCoeKfxJfSRf4vR85HTJcgtugQhBQR6mBRiFJntSg1TkFxpuEDfaufbpSUnt5JRAzSn4rdmS916",
  "key25": "4iWiW6VNHSkmU2X3agSq2y4yQZ5qHvYW4pkEGnrtTsZ4TUMj4zHL4GTWyUUGgjtefafUDrA1o6q2JvYJYYQq1K9p",
  "key26": "5oBWkPYWgHcDpaTV7V7BK9WR9wyVnzLKFZ8XhLf51TFmPnepoLYeuxWsSTo6zgUNcdVh8yftggLvkcsZezGtNzAi",
  "key27": "3XEGhAhySN5VRxFaC3TuGT5WQtitjeR3GWqf2mTdkvfeDwJT7YXjbNDy4GsprdQqXCmdLXWA3GZeP3Vnv83GHQvr",
  "key28": "3usCYeZaCayh3svCfk17sQ1RFmwqVEfc16XBt9bn3UqiNvCUnFB9xTv6oM2gRCy6y1g4uagLvdNHpPVaW3UTDMKg",
  "key29": "5SM8BbsDkvtyXHYGBRkwn2ghfEus1r6qTA7q8RsSuoJmkT1gzMXzkMDD6w3qCUsgvuQpXJmNV322QdsUtMcbZT6m",
  "key30": "53BTg5SAKYniogqS8bBQRJVGxc3GCBhcJTVBvtCT5h2ZNuzLxbeFdWpvi686iVwwP7UoATrUFWrqNEcJygQMgjYz",
  "key31": "3AxLFhUMmHKr4yWnBJG32v71fvNrPf577a9kfaTnVRKCCmFHR9Fi3Q2qAjHoV61TSETxvuMUV3zg7tNsusHhXjCo"
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
