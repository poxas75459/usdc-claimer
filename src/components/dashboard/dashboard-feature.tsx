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
    "46FKBKkXGJWyEfN6VdyPAcDeHtd3wKwkzr67644fDSP32eaHiJHQJKuphzTLCEqkMgPC4uzuzNkWD4NvAJ59xCaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8DXuLh4WLgRo2KV2S6CgbuMDSaiXbn5CeRtnFCeZCQfmmxJqjHVj2ZPdEDwhe1ouMLk8DUa4FLZmpxZ74f7Sct",
  "key1": "2vowmbnwjykQgw1eNNcrBPMoX75V2Y8KrTsszkto6X6QwRH6sRpZyLBhYNREFReULAoRTBymajN5NfqbgeBncXiD",
  "key2": "4pCx6LBYST4u5senfNuYiydmtaGzDFonH85VZXEUL3SWZszvrNTjXGa5r459FrcKCxTibPuhrLGEso12iP5J1So1",
  "key3": "55JwhKrZ4bSBjx1JGcngKy1UornJFHQRgNDLgHq4yJrXa45YDPvBCkp2vshfpDJ2xzqijsUPtEktZjmFefmsuPVK",
  "key4": "56MbzecgtjGe61v8ZDnQb9cdjf5jBdxFx1r4bGW7Se5Uw4z7WhavNNJsKeeMVg8Dx1a7V7NdZyNXzC6KNWCA7itr",
  "key5": "4TxrhBJuHqJicRJYb6c2BTBSzx3SVrGqNRHA15MnNfRKHtxQXndtjjQFRiGA3i6HqonhVG9Xm8vjjYuiy9NSWDc2",
  "key6": "23MfFsykJ5ocFcBtHZ1eDCzZVqdkmY4vU9XRrHvf95aQENyNZMzbrR7ybpj8sq7RrshCyRV1xgpRjYion6envxbF",
  "key7": "5GRJpLvScEbtsL6fVRWLoaBXWQbX7kibKiKPxVCesHMt2zZz8tXzLxtocXeRUumhUgcb5K4ALaVTdnMtYom9H6Sc",
  "key8": "2kATW2CBGPK5omP6VTyy7fPRJSZrfPwBAY9ZkaaLiaUduhKkRzwW4cCUEoobu2WkhXh5A4amDrT8KwUDBJuhK8Ty",
  "key9": "2qjGALkQnNS8dkY1FHLN2nb6D9MVgiSBcDqcCBKnYwCcH31KjScpK48BYoZ5hqzNtVSoKtQcmqNuJtNyvR7axvd2",
  "key10": "2vEiukksPeKmCSRyRHVqc9uJre2qSSWG2LBd2TZVrdmkSccp8bSqkUaAxmfDDz9SNEHER5kc22dKwW79hBcwfRPu",
  "key11": "4GM88XtbErR84QKPNDamBmm1vjNHR12jVi367kK22FRqvjjjd2nHLH1V365QV5NkTD7rMd66WpkpiGhL9g1kTVEB",
  "key12": "4TXTy47LcbQ8To1owMxYWK4hxJR1W79pMJS5xCrPEgW3BqkhAmC8PtXjo4obTSYXfRqjASWPo22weJ1N93TL2BGw",
  "key13": "3GKbqMj4KHp4G1Nc81KpeNQ73Kyc4SyUTpstepnyGp8BSt4gZcsreWkuucoYn8sS8FhB83nby2vHntUcGigoMvgX",
  "key14": "oNQ6kZi2eGgJoZRA3hdpPoVmu5iSbMCRZXobraHiGw5ACHQHnWPy2v9Y9s9TN91NebpaiebGDunAm45KH6QdWdT",
  "key15": "5u2Uqssunv1fhpNVQsR6L8EdquyujxPGUiUDthnYfr7YaYShMLrN26B36Mv9awCJkH6waBdz6WjHMiSyLNEzKFNr",
  "key16": "5yGip6NqjxRe2s4NU2MBnsY6BfstbYXTTKQEgcHHkWY5nLz62nQsFGk2TE2BZ3h6DNpaepCPpNygqb1BVMtehR1r",
  "key17": "2v1bhgjJ6VjvFQQFSYFFcHHD27goNVkFRjVVDwBgpTZiZ8c4XCZCGsZrLBRSeEeM4kuN9AvtnrJ3TznVs6dsdP4k",
  "key18": "3poW1SCpeqADqVD6Dq1c2o5kqT8DGfmnSfzLBbTcFT5ZQ4aJ3Su7zQegHF8k8bWs9jd2M4kycpPR8DMo3o9PK2Pp",
  "key19": "5EWFcqdHZpzzQcYW3mmmuXfD6HhKWzv3bwkjVYAQopLmdJSD2kBoEHgjxS9UoXVWpnueGitTMCFuvZJtGzNCptzs",
  "key20": "5B9bdTwx6qKNBBe5FCzayW6E1yfC3cSJFHpTtXsbnxTMfSyiKSojnWsSoporhsRuCMKytHQWYUgqMQMcU2Fur3Eo",
  "key21": "3pghPENoeav6ayBd886skuQ9PC1efrff3FjBYQyeB6q8JJZ3w4azF31WgrmY4JL2W4PTGDXEDJJJs2qmd5ER1p84",
  "key22": "3orKzHgzviLEbdsSUosRs2WdywuUkokCeYU5KsXHEH4Um6yvU2RKdKzcoW6QeVYfDkKBeSMLPebxeDdTpvsVBEvv",
  "key23": "5dGfzufXnpoUiEgZf8TDZiJG3NEtvh2CFncp2TrUH61PdAYUSnWaPMhXe4LEsC18BeprpizzmkGxUeJYyMHDk3HD",
  "key24": "3KbC4eXY3ruXQpmRL7628EfD3uRZk1AVk2kKxVNmtGPZgkqfjasTicDD9BbKY3JiuEH8atVG574TeU9EpKSdpWsP",
  "key25": "2piaJZymbcWq4sdL2SfjFMHDBGrKwMJor1Pi1JRKHzAe7dWAKrd1SW69bGro1R5AFbmbw4oMjpQHQA2RoWJF7Wgj",
  "key26": "3K83oGSYEvzt4AkeiE2q7AAj3om3koCv85fSEeu6j5kXmaCi7BPyBd4u2EKNBuz7N5q5wV9HTsEtAk1WBftejZT3",
  "key27": "dH94DU7z6MRn1AfQwhk5pWkJmcJL197jX1gb12Ub2YZ9ghSjhkFeg1d7GZuvvAoEewXmUP1Vq3CpMxKwL3g63Xq",
  "key28": "294T2FTsJaUoU9rwBeuH2uZ9KScZQfc4LixqS2GtBaUcv3DtreD4piturN37jHTDokNHTUW51brpDyxcZnEQAkBC",
  "key29": "5kxYUrfxsnHtasZ9ZqDuCk6aNkRykYbtqW4P4LYK4kqmbVxFyxSL447tckPiWZXSRHePUyzHTLaRsLU7iey4E9X1",
  "key30": "3HVtacPYHAc72yy1pP2mEJc8ZkgGwTzBTUeaJRnaF8wM832pteSBv95hc2mNtLuwHAwZKp6yyraS9TA5JEUaqaHB"
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
