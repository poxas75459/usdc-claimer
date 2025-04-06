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
    "5TCqbCH2TR3AhjLsUhdfJmySkhDgKjsMAjTEzXsPwoHbcASDbR26EGdRL1Dvwhfvn94tG6b53yYVYcouarTQa6MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVHkagyjZkFZkPFAxbwFGgokN5AgRKntBXqWoiPRcpFXj9HAskZgh7WPzruHsYWmxaoTk21uga3kuGghtWDPr72",
  "key1": "4PoqVnhQ7sky9m1frkMdrpCB2SiT3DVjHvaMzfDCXFod8fqYyDM6Mb3D1SfbNBis8z6vheoH7YLipS1zaPQ9VLy",
  "key2": "3fDdWgAxNSEQvxjsGwcFaARWfHSGDdCMk4qnkghTbrHMkciVMTwY76JBZ4WwYmN9fS1Uw4t4pC99sooLatWrcXjn",
  "key3": "42ppowjDcWndeT4FV2ZqSwF116LgAoJadYkEPHbSaHiY9Aow2bGfUd7mDr6Bn5BKYysvnLxaF49mkEyuccHzA7i",
  "key4": "39KYaPNHdHyQ8SRFDTsCm1KmFDMhG9y5WWoNbRfhuCof1RBDkGVGJod9ArBbrekMumEhYRTLCQ912kRArsqyGZnw",
  "key5": "669h6AypmsGJrNvY8LgZJPBhMUYTeTjfQ2jkVGZXPSfhPZaoX9yBrgW3yAk2mqFw3aoQigGaPzzrWFU28zCHwjM6",
  "key6": "3S7yhHGfTPDZViueaZpNaX3AkLoZSTzgcUMRaWZQpDTxYh3P41qV4Cp4oQPbyVa6qjhojaYGZSsmLB4xCJjUtYju",
  "key7": "5cyUWC3MBU3UaSnKfX5WsNia4yCtwzm84BNFWEjrj94dofRHpVAfEWVpUQfT21RpcvA6BWUiSmjufvSJCWTvpqEY",
  "key8": "pRwxB2Zttcc8TJndMAsCauonQFK6fyZqPWm2FLxUzNfFuzocxxiz34ohLuuwyZmSmWHnjgGdUGz9BLrKNSQNmk8",
  "key9": "4XFBCagYQ4eahUefkv3WG1Dym8CLaN9C5zaQ4SDt6eM3dg7uZQQxptV22G1wDQ1RyQepUGiKUnVBGNJueQ1XYZwp",
  "key10": "5MiY6kAqfZTJc5S5DP81T53uJN6AM1DfLL8vvdD5sb6MV1pcRxdX9PJTkSR3voVmaKDo8WcBhHVF5LKmWoigGgBs",
  "key11": "43Uw4FJv4TLx2EH2zVtXBuUccQZ4pm2jgSRY2rvBnsNyUiWToERUnD65WurcjVXhDkhYefwcRrov4XN7eSe5J4R4",
  "key12": "42EHSkzqfpgzngqKniUuoM6TnTrqUrNmMmqs8h5mMQXgNdejM5nPZLahqHnhMLKaWNqbEKV6jr9Tag51MpTycft3",
  "key13": "63d2tNfBbkuBiMB3brJSJRmJVu8fcwHKdw5oi4LizHmkrhv7GLHGgDMdVqhMnwmYs9F18CqmGhtygCvWGG73gZhq",
  "key14": "3SMs5cb2s85W8m2mUAAqxgfzBTP6QV5mjsDrrYBeGxNmmV9Fr4fPU8NgtFX7DQwJ1QRJHF8NmvCDEhWo7mTnemGr",
  "key15": "3G4syGswXtjNKqKke3PoDb841yhjRoibqkJcAM3X3zTGYSdCYdW8qYNHFdU7cCAeXUJDHvzm8VKunNGKWTFvfnrZ",
  "key16": "x3YxLxVV7DDk8TAFNt3PNVSvDpyox9yQ3PAdaLTP8D2xKEHXWqV1VVG47VLsKTgvSuPw8Exk1oxjT2WZnzeuasf",
  "key17": "5m2ArYWXM3ecJG1ihN6zVrRNMRn1Xkr2AT5zJwbR5utRbuV14cykh2QDxnAGi3U3GVd2nH4ck388ZWJqVoNaQmRf",
  "key18": "3evWGVp92hjTPDWmdQXi3zNdy7NPXTAXaUmqpAt4iL7M3N1jgJAVA8F7f5itq49VzQA8KvTp5AomwN1x2f8sgSWZ",
  "key19": "4t55XJgHJvcfxWpehFusz9x5EYD8xFKiWgoRGH2NP89fcGrydBY1CzVB7Pn5mgcvEnynAFhA7C1GyLPQAgBKLtBo",
  "key20": "57ZoMLqKEjzxqMb21xgRJ6ykZ1mQPYw7VVNymkTm9WN7S7BVKdyuWasVmDNC6hDDLzAmEC3heDsEqPbqxWxcammW",
  "key21": "5yQytXXP4tiQCHXXyFx4qqrC32L2Jh8zej51S1AhCLW875bSSCQAh9NUaARUMzc4oDgZFof2ZLqkrhxuKuY42AXY",
  "key22": "2Mi6DayBEDuFCEsxy5gkJ8FY9ka7YToB53Qcz6E9cYMU2YtFnKnChgnrx5Uz5JNvNtLNS1BSu3vYhQBmHcwm2eiJ",
  "key23": "3LorNQWgiXoXAkAaGE9BuirEwVtnRqJZmT8tFgDNfPvS7i7z3DDQEWFnWtKQ1G8rjNdrrriss7QAAsx9hgkv6gGo",
  "key24": "51GwWmBMJCyHb177c3XfhS3MFrdCrcG4CxYbeu9je78hpb2ooGsEjBgfRDmaa7w3nHTK3NiKbvwYxFswpapGvWVZ",
  "key25": "ryn66Prs2BNRAHSjvWj9QDCEVhrazN2ErB18n6EeXg54e17WbUmvTSZNXhoHP4w5oWP1SrrVii3JDEY72Vark7Y",
  "key26": "5igxWgHzS2iNKCQCBtztu3ppJZ4m5CQjEfJmorVyjRSZpiatLzpUguM5NVX7k1RLt3i5eZn5gshmx2dSTfcGEVeQ",
  "key27": "5KrakHZdmhvcKT2LVmWWhcaGeTWdcaqZLS6j274JdgDU5Qed2jfHsFDZHHBpoACrBgczwfz2vmqcKkfLcUtceaaj",
  "key28": "FYj2ideSNtGKafWD2DHo3HytCiGhjbyAUwokc526U9Dx7u7cAN7C57t3cXBoMNA4dg9eqKN4VH8JPC3PTeURRuR",
  "key29": "2vUhXpJ43wCqnTWhurJ9ZXcu4M6pN2VCxCnfEo26YUbA8USCAQy7GDEF6jiesTV1bv4mQM148v6xiVcxnEAxG2Vb",
  "key30": "5ipgUfh1ithFC4xeNNe4Cpi7xCD82GqURrgovmAmUfFpPUbLoP4MAND9ZC49cjMJzkzhr73bTdcycq1Qj4QuWdZQ",
  "key31": "5kA8XdYnqrxsCfHWTsrGcQUfTR53oUondPCeQGQFPruF14B5Y1sy8yQ9bQSf8M6aZn93PbavkWG53SjC6QQ3HMte",
  "key32": "3p9FfAyPsd9MASFGiNqCbM5hFBb7e9C4rFneVYqQa2ZwcwB3sgtzDoDfHCBja8XpAcqH1rXqVPR4AKgyTudmUhv8",
  "key33": "5VwmEfknQyhcnQkWsduJQ6jpw84Z8wYKrHczYcwvGxGrgPt4zAc8gUeRUH7GDoCVecDrSY2QDGJ38iLZt3VFtore",
  "key34": "4ssyLGJGZt4WeAsWjvsMotzziriA4L8dKCXxbAdnJUVW4RYdHq8qu9cpuKAnnuicvfsDZdk8iZkCP7FrXwrLPqjQ",
  "key35": "3FkxH6N4T2Y4fDLYpfMXDsB1aEtLwmhcDR82BJk3YgkFNCLQ1khzykeGaGF6tmddEeVWfU7Un5Do4oqhTRtDLwBc",
  "key36": "2reSk8wvNS8Tx1CNoGHtAYcSDsz9qffnxWYj5cEMTkWJ93Bauc6rxkWwykZMuGAjLgxDXLyoDMFX1t58qzZ6bkgN",
  "key37": "5qQZcbHYj93rJf1T5GLGYSWR2Di3MJG1qLjcGYTrQm1hrNwGpdAXmxbEGWwGxTHgecy4tgs7XAsnuNiVFYE6EvTW",
  "key38": "pRPh2Hx26GrFqPbe5U1ExPGJciYMxcirnkie2gRDMVTLxrHHXRUQZq5yKPwN4aChNG8wUdd4Y1ZpA6CtmcJzL6r",
  "key39": "3rgBY5PxGFctM1E81H6YSq5eAtFP9KiZ9EFipJpUR7psc66hkcXZFvLswue5LNJcX8eWWMBSsf9BV1VkMEgrh4n8",
  "key40": "3CcG3JwQtCXLpYNNCvBW3kAhZM4sGqTzfZc9KRHWJb2N9ahgUPjuGfp4Y5LD4zJpSgkADZimjsaMZdPjwn8vcy7a",
  "key41": "3S1Pos2m9bEZvEWym7SJfeMZH3gZRwmxgQcXnB74espGSnDgXWeo2Rr2bJpbjktaUhJUFuM6oF3piLjED69KQ8d6",
  "key42": "2wriGt1tfdH1N3vGFKNRLq72ESi9uCZP9vVSGFnBT3oCAEkJSbaRmN39pVBvPtxmKX7a9zsajC1G41tXRSFGi4mb",
  "key43": "3TQLDxnUyeP9csRK3SBj4pGT2UZRwYa6ypcEM99YKNdNRt5Ny8NnPebub9d5zni9RiMvLjvsedAB5hujxiU7rapD",
  "key44": "46ofBorFUZHHsLAeobiw2hydnetuiAJhN1FEbCfSQ7uGiAuPxYyNRKJSxFSsYS8xGaDiekbW6ykiYydyCQixAsNe",
  "key45": "t4WD6BZ6qApi3qZp8fbUfqtWSVPMQd7oUcTLKgcM15gyBUamAMke34x5tc4dfWtkMbghd7Hwj6vjocvrPZ3yWs2",
  "key46": "QuGU3n9uRu9Q42i27KS9imp9LGrTT6sgruzjYsfDdpTe8oRkLUijLAJdWM1r3FpJffVE3r3xa8SiEtHXtKi6D61",
  "key47": "AcD8FviRfRbyoLf42UzxjFRB64dSFK6G6SfHPLMMNZ4SUMaTEi7b5Bz1GdmoESzg8heidVFGnpjF1Uq8gvherJz"
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
