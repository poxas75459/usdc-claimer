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
    "fFKR7DKaFCj58NwhHUkHiGddyXuk3RNdZQVtuAcyh4GqUgEbcZaU1UrP6LuVAMdXHPnviXSFMb4nGpkxZtaWpdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7xX86fjYdAy97cCtSA4afBMNCo6mvX2nuL9CttdHSZUXADFeX1ENmU5hJb5xrtQx5zsa47N6pxbuwySxkC2XD4",
  "key1": "324S2cm7txezMjyTFgGEyBUckdML11Mdt78x4aqPPg8fEKmqmCfF2higsG2iWbjdpDEPG2ZPjhqgRuVmrcQXtYqm",
  "key2": "2zYnyvWD4V1gR6t4wUcW7qqE5yJdzg8ifMCUXWZBAQR2B9iQKUXWv91gyMbzAZ9tFnjEKD6H98M2pZAShgbX1hDW",
  "key3": "33QawuwHRNMTnHTCwLcAiAyVGmkhWdyiJ4STdmDN2xPBWtgZjrQoSX4nLvhNmcbZ7Zw5SfYt9kqz6Q6cRNyzmW7y",
  "key4": "2pgwgsLnoXYcA1a2wwR8PMxTWuBiNJW4Kg9vAcL16VP2W1HfciUAfw6BXZZmEhTfWouQfucKkUKDmMeHdBfbKs4A",
  "key5": "5wPKbxNYnprQeUPnFU5cPLEtfY7zxM62GYBkXLWcxFGKFF2bGQyThnwSaKpiAHknQsobuezvFvPF8SQQ4Q6qp7kr",
  "key6": "3wtJVd19ejCzMAq4VZu9pNT5QyKMEderfEACUM3FB4YHwrrDmygez3qFnWoZ6BtRthtapbCuPZ2fakg24CudjyMp",
  "key7": "3LU72i2vYRFVJP2pj5fsVRo6aZNXUb5GjnFd55KGnoNoKYty3XVKSQKHoxFzq6pxbSEN21Drfyi1NLK6ZgLCN5jx",
  "key8": "2VjxqWDTeCLTSrzm9fLb6R2LT36YuxKuKTmd7rpkt4gkR4Ai3515LKXCuKiPQEd2rT4JRvPGN9J3YdKEZwbghk38",
  "key9": "hksjLTif3thSKFsMdJL5DU3toJnLh8F2dj6xnFQ2bpRuKdpu6xveUHLwXNDHUzHeEtNtEXMWMe13YCD34mWJiqu",
  "key10": "3BBzo8qiwaboqRXgEzfnPRdRahDmmXTwzViGSvrdBk9VEncmLnSMCPWz63iP8w2dLKm8GGBm9iyjFgyNHfNgWMZb",
  "key11": "4fbVADBoAHzfa7HvaCmH15bv6dYjhZe5Wd4LnZBFcUQjPkxixfrMkK4BNXuE31MaADLdqk5PGPibpF5Z8WTpJqge",
  "key12": "5fpL1vZbKiirPwsRfG1CEKR4DvBrDHcMe552Fs1FzLnpEGFnKE4776gvXNQL5yiUfxvkiThvr4PKbBtNkUPQAts8",
  "key13": "3uoEu7S2XGBNTCs3vezvPNFe742xtJwxS16RFeMKRY3ahFDvB4GshKV4CKJ5wrj4Y55iUgn3ZwwEoaAJviieYjCo",
  "key14": "jEL7hP4J16wf77fdX9yznGC15P9wBrhDbvZKas68Cguxfz1EcCyxfYu99jyVnTFxxRCKNmArneCyT214JnSLG3c",
  "key15": "Fz2MvnoqgHg3aHXytSiTvE6RgxtSnBfEtqTZ1en6mon4JACHnKouwfXzqkg8oJRAauLKib4aTUNAWihRW3WUiSo",
  "key16": "37L8n9XQUz2nCFYKsNW8gg6gh5YMEadvXVSyvpTy65AzvvRFpZ6ZQZUFXdaMFpKaqay58KFb74rXirTGajevitpV",
  "key17": "q7gSVan1cVtrW3Leq9CURtqttBYkCzZsgRmfywZZF15VuQChkHCNgASaqnZ1RsbdUnJp3gnaDr6PMWq3jQcFw6e",
  "key18": "5dtWSW6M5UsqMgZJzYHde4WBPKgXL2uxGjwmW4qHhQ6omyad3Cp3yGzRB8zECrdaZnTRFUzew28SXfZDhRfSCDeD",
  "key19": "21AgNk9J1nu4cNbbDNWnz47CXnqsTLZa9vGdPVsNsssQ4DUTmr71wgrmrDvx9XBxLHEegjFeGVqsgdueihbtP1Vp",
  "key20": "iQoWdfoDnFx2eH52mCR3C9xfeRx2Au25f8HrWq5Drv6BsUWumZhm1ktdY1KqcVsgonqovnFfAXBRz7BJSao7ifR",
  "key21": "5BukZNEGEeqZrAeDmdnE1DKxyhH9ip2cQv1zqoawbqVAAovwkQJPavKqERfF5pvy28t9bQXHfs5QZ9AnqXvLxCyy",
  "key22": "3iLXdwHKYaS6w9tPEoX75jiKXhQaACbTotpZzgtSQ4VcfasXWHGQ6bsAMn2zCVXccWpDvsRx1nTFDZUBtcMBv5RK",
  "key23": "532Tjwyuq5Bs3spWRckLwLENoy7xsK5pUBkjUEZqUL94BpGCZW5feBHJtK3HT5hwehGFAdLRkD61oQpfa6aawrg6",
  "key24": "5cprSctLtX4DyfmL9YsrUxkA3dg8M36dwPbL3Jzrsqcz2YdowZPHRxCvBgtNPzSTqVYp1nUrCdiGMwLxm6Qarpqu"
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
