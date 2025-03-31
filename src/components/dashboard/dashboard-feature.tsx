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
    "R44WEf2uQegEjhWvL9NdrKndUVQhg3HZvtgJ6sZzNXA3xQ9Q2Akki8kMG9xGn5onTPzP1RuPzK42Mw3LB2nC7NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLWBz4LjxfXGwXPuWavLQ6iHmwSDWKkxE3P5vCgfxMbw48Db1TGr85jqBrYL5tmounX9uqiRPwVhSJxXeM65Exr",
  "key1": "2rDFJTCPEi7HMWS1c7A4qkNiZS1AjCbHgwSRudDpEMw65HjuJ7rFgWVYQyGGdYgVw3oocNANGfWpzaThaMQx5nF4",
  "key2": "48RmMFYHfmWoA1jDbhJEXdby7964zjVCvqiWjWU8fFpEHkZhdn5M4Jga2FLoqp4GzsR15TauHW5EBygou211D5ox",
  "key3": "3Q9my6qpg3tePjeHsjh7vCNT3VdSfgjenyxZVkKNeFHyaTBf1SKCoMWL6XvfwHq1Abr4q8c9wkuGqe3uGTygDDZU",
  "key4": "3yDM2xirphMfVjVpgSdviRPqqJ1PESd7tBcKSAtTMrXk2Rz9x8eJgZ3eUBxK424b3gTdu7mtuZAEKzFw1iknSPqE",
  "key5": "4SiDDexNVmb1dwzicfr5t8r9o4Ct6JKmqBrGB8JqbRMSWg7KNoJJdL4ET7ZY95xrrAgaj8diRURR7xRERJVDYBm9",
  "key6": "5XgC5bNPGdcpjrZDJKHtapsWYt13Jr6qBi8huTMH92aAdNyURpvpBaxRM2FCekU85C8PsNNJq2h18T6ZVoY4tVgL",
  "key7": "3hoWRPT52TyCMpEyHPFB1XFJwYVASktoqewC9kt1Aus1qUrH5xBTrZRGDCmT2sQzioStEvomyJbxA6N2u675PC9h",
  "key8": "4o2T9Ang1SwrzMph3W2cvV8cpkos4QRvsYWPyVeTaR3bxM1WpGMKxmeYBfNMC5BA6nNv37XjfXPjKv3WuNQg7Rab",
  "key9": "5Ks2bbdUCj4LAuuCQmnYzKpKeuBcLLSaSPXfkTVMVEAdabLBR9dgWEeJMuJ5au1XweNWZ8K5gwdvQiZK6SyBvHMD",
  "key10": "3BzzKqXS8gT5FWN4oZuSMydpnSeNzSBX81hNCsAhQmvBehRcAsHTKjQw4K8pyk9mkx438mhr3pYUfrcN1qfBwYLo",
  "key11": "FxxR1WPgQ5MjeHHoWCxRx9b3bj4fmDq54CHG9Wc336KWmQfen1WF2BFZ2G1LdK8earh7JrLnpZgXy4hSpcAaB1Q",
  "key12": "7ssLmSsMUD71SDDyvzkQ1niuhL8Sx7xsvaLg6hHBWCVgMKEkgsyJg38whnQdKxyhZMgpTthahJir1M7Z8RkhNCE",
  "key13": "Qo5hXvYMJ1vhn6APLrod8jx5TZrwhVSPv31K5Ku7nUFqkgsyP8ioepwL5V1r9rcuQNBRoveYwBFWtHEXPbRANkt",
  "key14": "5CxDTxcgmszRDt6fYEa8G8WuEW9zu7Tc4jGkgoHNwaq3j5k3ZfuJbcxrdR2eMTQAYgUaTbvoc9LuKHeNGXA3SL6C",
  "key15": "58nhrP59EQY3gnbgnxrfVFBsRCzyquv7nCfsJUvXpwmuz7V2CtXauFcGTvs85XRppTah4hfwdyDnendRGMpGqoQb",
  "key16": "3KRXP6w8xSEu7NF76J2T99BKMyqGv3tpGeyqACzt3ttRpJG34Wga4iXVfz7wXmfXeYvP1TUnXDLoJntABgsim2sq",
  "key17": "5bbUyM8CJX3i5zAo8dRAKJW7iescQ9htWkJnfJrK6ZXJN8DtqAjYvnzooYum1vRYSsqtAkaBsUzMPkCFQY1dKZf7",
  "key18": "518xCkKD7wQC1iHyxmHoeqZf96doHYSBpGERi9qzkx1m7pRhDnSw2Jn8EfSYkRtd5YYH9hHzeZBPyUmFmzzzjtFy",
  "key19": "41N2wfGcQqeHHdZd7wNT84P5zxPF9QNEBrWwDanZ3KAB3km8imCEZHJZHRCaLx2R98aj4xt2h52JUoAAokeREKG9",
  "key20": "3saiwjwGPNfDuxbnPwsQy2ynum9xFXZBT8d7LEQnK7hdpoLU1LrzdDqA2nCSRvCSYizUo7W3NowbG7ALjPJyudrZ",
  "key21": "zZZLtYuqKk4PS79TN9BANQ5yg83FftqrvuRz7n2XyiHpt4LP5pPXPxSbMFsWARv4WjhAFX3sjVUxcsDegeuiXcg",
  "key22": "31L9k76xXeQezbb2yx3K7N1qKke74aV29JXnwsogkGvWE9mTADrpU3J82prbXFsVkg2aSLWUHxdpHVas3bKznMNC",
  "key23": "5GKdvjPRWrat1YzLqkLETfBSipdsvpmjjzdJUdfFM6wMFBfUT46bc12Pp3PkZoH7mzVuJyPu13wkvKNz477vEpNn",
  "key24": "5xKXY7R7q67zrddx7hmrn2wtbcug8tKew7J3JdVeU22DwnKUvFSzT5jxgUJUPiQCpSmxbbTHSUAbgA7mp1JAQ1yV",
  "key25": "36VNg5LbXkbpgqcNNWkm2U1tXQSpuDA3NjEbBchsSwE2YXyhdQ9jgJphPbF8cy2DfLDdrkmKqc7FLdjkdvo2yiaD",
  "key26": "FcKXzJFTZpuKvNgCLPwBvTFpSBufcDvZsmAtxAqz7vTPmQVcbSe2K1ma4j4o2qfARF64jeUMHM3TmKsvESa2ja2",
  "key27": "4zQbhZVqoJXeNrHM3Dw7vu8ygoR5nkVRNV5e5cW3xvuq3n6eNbfhSDyGEDLxsfyRiCYBsr6df6hPMc8c6nPGnvJS",
  "key28": "4VFRfpY7imnjjvChHzKepTahqNuAJoE5T1E1Tghfdw9WzVoeHS1Ux6hAJx5nZB8aJVJ61knpX38swJoxc2sa7uYw",
  "key29": "5oFCirHcGbRvdKcZN7oCmfCJaWKpBrYhrC6xtYJDF5g7EkmYENXjYGKcoCfYcerrdLjQSoZ2Wf6UashbFyV5HvP7",
  "key30": "2JKnd3kWFDpYg1215rqBpwZ343k3RdvpG9MGq4nXgdbrUF7szVa5yHWdivv2qDD7vL9vVvboVzqFgXzw9KwiNkBs",
  "key31": "3rkBLVDcg6TJHQqJtY9PBx6Uqo78KQF2aKEsRctpwJcgZYW6Zuxa6MemAUM2ofWwXCPuThvhavzSgywnDK9y1ptR",
  "key32": "5XznJdCb78jHts5z8UxpmkSjysLzN1kVMm6phBgeHo82mQadqkqXf5ySNunCQwxouUcnjv2zvD3do6Eu7RRhkzVn",
  "key33": "KPcLc1y1JFg1MgtbP2BssThBWMsmFR6tNXBkUbWnkPcdMcQ9K662z2tAYhGkvZzVo1wquzfb959PxsU53gJPauK",
  "key34": "3xxbWV1GQQr1QJDmhKBEndwFcYKuLKadhqTo6jeMuAE3Ukxb1rzC6x3V1ytTYevr4zmUpCFf8vCRDKmqoscUx4n7",
  "key35": "5h4YPJ5AAPN9b4y9vyJHu3fuFHr7w8Svdofa75MwMgM16e2gGgsEPxnRRMWVLSNV65rmE953rNktgfn6BaGrHVak",
  "key36": "3STHwHViYGsJkkpRFWGY1WMBRTXVqSijrPPmTPYPFhSp5iSXjo7UrFiAgXFZxYPL5yLRWa9Yzt9dRp3zuUPPbMaC",
  "key37": "aGniWimK5t335QMykpSGx2MNdAtBT1XcMSBRDm1aaJHyJB1FsjUPEdohitgDfjtSz4E5ZHNucd5q2UM1cAt9GnM",
  "key38": "5zC4X6mZV56i8ezAVpnJTRWnTCUDrLZsedZNMEMadPtiPi76sZZyudhefK5gTwRe2bkKd45Cwwe4db6xe8xcPryB",
  "key39": "4XgNDEqHfH6iE1B6htLggK6njvAGhKjsLC3XeQLwv16ivznVTG51ciwXGsR493SLpCfQJ1jza6WEdkkFXR8exyex",
  "key40": "4e3sggWKD1fnBnP79zDtz3SJopsVqST3fUvjpp4FJNg52k9Yi3sF8eks9vrfDfsbYwxoEA7T3z6TWn3RpWVPfjPb"
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
