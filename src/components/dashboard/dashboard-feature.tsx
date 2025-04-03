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
    "3shD5QT9NouftsNGXAXYLgDiRZmF1EPrmMLeerkYZhdmo55JL7aWsraDa3fRRANJigw4x5W217RjXyve7wYSvDSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVn1XjLP14CQACti1sPcWbPMHjBuBuxptiTAHwsVBCHRBfDWpEzs9iqFBVzcMRMhYo3ksTcSABP8ASuSqaPasih",
  "key1": "3Lp12WirMMro2y2iJUX9ux4o5Zmex5ivN7dJSchWVRAsdCSxjbaV4HcXVZTs88LTEACktAVjA6dHR4sXJsCKKRvg",
  "key2": "5dxiJmFgcQsT2fwUh1UQU3ySJesLjvZttM16KbmVoSoY4Qn8RUb1AwpZiFVgvUQPaSedj5kW93azfiFx2Ygh5yqX",
  "key3": "XKYVjryWxUgbjHkTuPVW1W2qMYsGkt3ZFt8wdz3JB8uPUeMmu2NZUPSDELwzHbhLNY1SFVaj84TedpiWZMK11MG",
  "key4": "2dJQiHAvBsiVmTRXU98MxowYDPiPvmJguyFC6CP5v9qxH75qtiHVHy8wzgj1bRutiQ8Vo2U3wiPdKkHdSRH7ChVn",
  "key5": "VYvMoKyLi1sZCET2XVAaxJtJWoHWkvinAK6214t8N35aEG4B5mK1r4HtAiSL4HPF21APquFjPteM3nvj3NKtJwF",
  "key6": "3npE7VARJoMQkcGWaKHoa1gjAyGKFXFnZgVYXNXuTiHEQaJpsc8BEqcgdEtAuK8B8xcJ5PPLf9feMsNmRNYtsmcq",
  "key7": "4XGh9hmtBh8SLriFLA1UkuNsGzd3s2asxCGNB4t9anuauoCctf6uhJRDueRivyizB41sxHNzV3QUaVApg7gbrtJx",
  "key8": "3mR7XjAinG7q7BT1cvTK5CzAHN6dacBELxZn38x7o5xH4Yh2Y9rYzz2T4P2BZ22ygwgpbtXcZ4rpXUviVgxCkyMh",
  "key9": "3gtKHTwZnvrFCCNi2bQk1vmHe5CNpMawBUau8DXuYDLRv3a52VNjnBQK7XPfesmMKRpfvgZ4Lv4JdTxGNZzk2Y7a",
  "key10": "72NDS3YH3CYWMYVRqUcSKr5wVfrZoXqwAYGpVATj3U8GtxmeiHJteU36sakpwLFLFfckVje6qoaimNMHooPwJ3e",
  "key11": "PhWXsasam6jGMwcTsqK81TUrP2ESwdUcLf3aqtNDzknvrxhAqqCG5uF92fPGtieqyVwtgKt4AW1Yre8dtwq7Y3s",
  "key12": "3dT2KAzEo424f152VmudbM1CSngMJoV8tEubmmYc74KeJ935nVrv3Jp5W4fkP4X3SY5hix3e7XGF9byMvc5VccnJ",
  "key13": "3wUbWeGVAosw7bXaTvYSNfXceMYVAZfct33w9vruX2joqy6yvdyNLWAVtnY5NUMdzpV21DqRv3tteRXskVBgr2CK",
  "key14": "4AAeGQ4AZ11pZvL7U7KjTcrL8ZqB6k6dxiwSfGSZ53tmYRHqGfDH8jkXAtLkZGJc2TzsYZ4dpeCaA3w46QCdyuTn",
  "key15": "5VwAJEhBcEzeU1azeWCosKhgdrLLorcUSYGHeRxYeCo7221AWVKP4kYGQLvDzMhv5uqepVaG1dKX31Xr1vg9siSi",
  "key16": "5SCucuLD6LhfCt3UEZpyif2GwDLXHqnD74E9a5d3DQFT3KorNaGbPXNPH4Z9fKr2hzpvaEFbUCseRERrpekujtED",
  "key17": "2xprNQkELZ8SsrSfoFCa16HuwQrxVXMJe8d3vnpyQkc6Hm9bQ8jA77GfQvwn3RXGEk74hJEAMitS7YYwqSj9ZaWS",
  "key18": "4Ubm4g2RbTnmb933AHzmK1YHiTCTgrm6QuitHqTyX4pXpUwrij3V1pdwG96JNVqp76go5KcWB5ZTDieNqY685cnD",
  "key19": "ZhMxPKg9Gt4dp85974godA9Di7pvp2KB87opUHdwTYDvtU3xadoTiRr2gPPLAz3FEJpQpJv5NdTLDVXzzVAore1",
  "key20": "JqDchNDMGmdy8tkXrWd2TUP6ec2eB5VsGXDnA84iwiz91nSzXE3JLurtVkBQjmDVq41pjWfqgrnP97guPcgPP55",
  "key21": "2ycXxsHt3t1mzB3FUUpZZ75rzDiba6ckp5YmbPrMsPQqXWMsUasvZaaJJ9ZYp1y7g4hUTePJZvnWa2LHPdr6BGvB",
  "key22": "3E2im38ewkespxjqTRjdtFsQK6brVrQuWwStrvweeajoGA1QLYGPwfAQP3AiBdTVgC1Zj6Ar5R7ByoCYiyYJU66b",
  "key23": "4gefnnwV2TK4W9jGHDjMkVBng9uxpzAdun8FBYcWbZPb2JbSdSv3JrKbnCuEBstH1RAuJNLNcATtdrpjsy3oBePP",
  "key24": "3PnYPPQ2z1RUjjyekAKSi1PZk6cLhhfbGrCKhBuzfvMtqUuoq7tr3TqvbayiLJCcUpBSpXc3Te5y6cs1CgJopemT",
  "key25": "41phTs7rpGzDFo29zzpmscEFEUgCm5eNSBqQPGRcALXpMLiuJCGUZRfx12CKsrSEra11Yot22betZQeJiSWT1k7a"
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
