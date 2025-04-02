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
    "eQy4ne8ocngtF75xuLqeNBerm1Xf6eG71utkwdFag9gFGVFZhP226t5XCpTHksEZ1FhfRF9zqA9h83mzudyD2Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMms3As2P88MeNKQeyfCmyqwUtFPT4xR8LhtmSLDKLzB7BkXP9nFB7KvxyjBMpNCMx1GzaXzg778aYLUeuvbuvG",
  "key1": "5rnmFvEMj87XG2U8sYtJ6WmhtQAedXjtX5gRikaqwzwfkJzet2NwAkCraGuv7pzhCbfPewQPJ8P1iQY1knCKvR66",
  "key2": "4p1Fs5YDuV1QP9qyGmo774QZZaGNwsxWm1W3JqhEa1uXN2pzBEkPcXTpvtpcH2yvZeGQYEVGcfu6BLPBTnzkZXCk",
  "key3": "FQXUV4VWKVnswbSVFhGV4Kk92PpaArTB5Eer4yhicdkxqrRUYGzSdSQ9rnDkUgdaAPAavacn2X3V2ivbi8dBcvw",
  "key4": "5mjT1ZB8Ba7PAbNN5wWteHRNQkAnyyosdue3dEhYBpnfpSTFHneEc2QSTjhogqZvK9FTFbp6cnTrGUeMmC5EaZWW",
  "key5": "5FU9ieatpEjwaDDhojP3hbChL46L2H4htED7CvV6psXwVas729efyRBkydX6w4joHsdMh7couKB94TcYD2HRW5fd",
  "key6": "53B7FJzXZ2WwqtrRJUGxNxQbRDRpyJe5fSA4zLM3wAdXypdJpa4wd6t9bBRVFHoS4BGdpw9Y2ePYfN6M4dEs7seT",
  "key7": "2DDoJ9uoHcUWuKbBx6LS18JgQHmU9u9wzBZ99K1r5GLt7hyJyt4HHZKq873Zr5qEB5eJWSL29xHJhfrX1hdYS2HL",
  "key8": "4vb1iLbAfVecgZYv36z1cvahyiCvfCdS2y9ydj2yaEeJ6Md8zm4bNzbr2642XhznP6JTG44gqGX53Xu9E9mWs1oF",
  "key9": "3mLPzwcS9WCL4UGTX6Gm3TZDDshHazk7pVBavrxLhnhirnAji7S993Kd3i12CcG1yNkX7iMbKeRLRicjcYExdf5X",
  "key10": "5ynkCBsgYkN1zFvcdK9UU8SP5Y8CywwmQoATjEZD8KzRDGN6TAaPbKUq3Aj2rfLmn11h6xuRV4o6VZeLNKAWfyNi",
  "key11": "339m16nSb3KXWNXph1NDFHQRJiUmCBFDodTJXoEuYLXmjX8UdAHWt44RcuZWGH67exa6psbUaYh5DdWN9TECdVJF",
  "key12": "5XXSroiSZHK2tjBzxCNzHBpBvoKpPZjyvJPJU9dHhhziLmnZufjVy4hgaLyYtkAD1Zf4Tw83ApiwnsukuxNDMpHU",
  "key13": "munRPZiLXHj8Ph4dPArWWZS7UbC4Grnmxop7St1XnHt7TUr1dUdFXehnw4hnRKQeK6SyNV2x4UN9MsjdoHTJ9zT",
  "key14": "3hoS3toj4EtamBzgLv7XXqgZLYc8sHDhdot8btXinNJnqjuyxra786WQFFG2pKhUEsrxX5tXmnwhPq1get3Q441n",
  "key15": "54WZX17dNTxdzvfcgCDdcNyP3BjiytbaRF5hSWL4Qv3on92wyRbNki1vjDdB2owrJkVSwEPscDPMZU1koEb1cPQe",
  "key16": "65oJwSfT8SRqiMkpFSa9TrJEXuyxWi41Q8PHqCUV2juYrrjgXvNbtomB1MUaLf2JSvAD2qzZ9AU34kw4Wa1V3cpv",
  "key17": "3CrTzHuhvJco2WNsU9iAtWVgwzrEQy8n2UDDjGE68n1sz1t3L9A9QwEWURRBXsGeeKtuhLj4jaUADQVgEhPwmiFU",
  "key18": "344rJA3fw5ydTfo2cppuxgtyBv2t9HdVm7wUSwdfZkgabvgZMcDouhnFjSDQGamzu4dxtrsrdQWjkubVwsyqyTTR",
  "key19": "2uqcu7ejQjxba6QKMixQmWbXmm74ZzgsZfzyciDp2Mm6pxSoLTHnvxRXZ59LiZouUmzxBhf6r7JkNWofJHkzGHsM",
  "key20": "4NJ2TQt6Xs9SH9k8nkcQEMRGV5nE7z5Q9ei2BNPRAKnPnmY1QMLyp2LNxdVUtHTaANyNcLoxreYr1rWJ9rrbHff6",
  "key21": "2m4msLdwsNrUSG8rsV2pgRsFmh1sn3EbzHzEZWGfcMLha6qsLjpNCcvGiztoaFeNFzNNRiXxZW6rQRq8uLWmNo2D",
  "key22": "4H2EnmVuT2tnTxz9uM1dPyzhmKSqcMm86qQSwVqAjyHV3uYW3qZGKosvG6CBo94o3ayJ58arSh6KxCSatEg52Xrh",
  "key23": "tYgXiJoKh9CGrPeLUjUPZdMxbmyKHYx6aSbh5UwEnF6gLmXqAguygvLLvT9hcU3QWnhYNFpNb6nfgybNEUDVkaA",
  "key24": "2eEUGiiaVJMyDfSKHqSMpmA3saEou88n6fjx7fa3Bksrs17PNJQfzvyrL24KCvvsYXeWTgB4BT9N6iFnC4s7xqRY",
  "key25": "5dGjBMPrN52n3yHiLvWDTP9G7JJkYiLGgaggve514x33wx94ps7cMiQqLRtkY1UMsXy9qTch7688MD7mFbsk25hL",
  "key26": "5TPyKxhqR7VeNpgAu1JxV7HWuFpQG9Wa5M3KN6acgbpsxeLfYjg9f4c5dHSNzzqxTn58Ff69Dbvwzq8BDeaSqfrn",
  "key27": "4ZJSBXyudZxE4pstBcn6R61JTtZpFx1MK5Y9M1FnRqLUwnQ9DHgxv6746PcuuKvSnu3DrZNoHEDyLSc14uPy38Wy",
  "key28": "26ryHmP3E7TkrbYg6RbMG3YngvczFoSZNfaoLfjNK5NR3tK798uYadDUb6xBqzJamh5SF7r7FQVLyT41rsX5PBSG",
  "key29": "n6dqUKBogkeUAaFLQrcagKmoVd9F22ZJYj7ckqyvGV6QGPgthY8Vn4v1pP9Q4WUArdMskJLpqWZ7CvavYtWLGWr",
  "key30": "36XiXQ7YNXb76kdJSwVnXzHASHiAciujeAKXG1h2bb55SJfRB62kgkz62vGyRuZQU2gadSqMkNC3E2jxGXktarkJ",
  "key31": "2b2kVpKFeDga8uhBC18Gn5RvQ8aYp4jpEVp4z1UkRBBad2V8C9DrW7sDMpjqEDd3h4DV8Xvm3XKcfZUsypqZPKQP",
  "key32": "4g2CNhWA1kFHtCsK339ia6QfjLZ5sZ8thFcot2ugiqWvNQCuSZYTUej218KDmGfwpZELSBoFaTnU2z6KZWiSvVcn",
  "key33": "4MF7Amj9o62Bv5uz4F3LhBuA4yxWGaSeJsotuQzNwaTazb4XakNSBk8gSyJK61BD8dpFoooCLVPJuamAEAS77A7p",
  "key34": "4RQXk8dXWzAhEKB59ijjHxznMuRJWNfp5aYCmofmg5zRtbcEgjZCMW8nsKE9HLT7xvAuJPNf13B145d3tyJ6rQ9m",
  "key35": "3Wqm3gqSANrQ2muJfswFTH4UKetKNomBZhiX5WdzWNoPzPsGzK56Kkv3pjWpB3S7icW92kcY2gWo2TatvbBdC15V",
  "key36": "5E4cRSftaX6ddUv2aNoJySa4ZHhhQcFacXjYeAaC4QKsT6QbooDrgCo1j9G2iVgMqXmXfVcFFQCfSj64eGQC558s",
  "key37": "4rEu2Av9kejdiLPGPA5ESF3LAQ6EsZsT8M8NSdnMqvvfRmxdjffUXyk1KkYQUoNWCxSsTR8ukCfFhvBuZhDmAvMZ",
  "key38": "4QSPYeSYtRYMHrTt4YXA9pYQvvmM9w7xih6St1L3LNyjAWz1kUdxXWx5cGq3WkcinQWustN8HYQayajcJamp5i8u",
  "key39": "4fVRBXC74Ctg4Lh4ayo1so8z7dpVQ6gxqVEAuqJFC3kuh4YHDu2BUNLp7Po9fhKSQAVGq9dRnwP1inV567J9ESVX",
  "key40": "4kzEbevAnCikyqD2mqTwifLjEBbBZWnkD63SeXnA2h2r6aMLE1GPbpk1kCrVJHNzwKnpvoLk5V7yQiWehbdnjLC1",
  "key41": "qy6RNJtZojRuut3imQVsRUsYTjU6qZ86mwtmm594tDdvBTUFethkx7gZHnbonkjfa7U6W3q6u7LLwLMvfSA5QxM",
  "key42": "2YmisFrVhfzVgc2LN2Na4gJTchCyJ4cM39wHmxgPAoBJoBE2uemPU2fzSMKT6Qn9NbifZuGorZNiHL9gVuhKkRUi",
  "key43": "5ysPCa7Uwnu5xitAVJYkLiRLDnVffjf9bDGZB6DgqPnGHx7oYYTsXwSCrcjhcyY438GdEJKzRHHC9boghew96mNe",
  "key44": "4GfV9NXR51gwFkd76dWhgPZJuHhMueZCp6LGvnsQD22uNaGAZVxUVYkUXHBXUMEMp2H8T44gMwD4SXkvK1rhkgiZ",
  "key45": "5WoZ7twAzey8QpN4j3bbYTJzNqKuSBg6WJn3i7u2jcPSrjBgg6QYxdTPbqxbZzCYR8zXtfjgHaxehaM9nKyP4CNc",
  "key46": "5LTrw6F4kVodBxqqcmdmEiEeByaqfeH5mW2mdAHYS5ZQ2GbLoYNyNPcn8wME1y9WFEDMPsddBE65eSFa27USKhPg"
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
