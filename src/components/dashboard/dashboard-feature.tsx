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
    "5xefL66v2Z5Vt6dr2rBqcY3hDDEspwzfPTYr6XENvXGXa3D7Lmp9eAVR7mHzffG8CjryjrMsFq4ak9qTQgB24tAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woapX2vKQ9igFfqCrtjT9G1ubYmLoNeSfk5tzBkfhZ1guLgDmnSmPFkParXG34bKxTEySyh8owcuzxrMgp3JX6m",
  "key1": "x2MEJAJCMY9WcNYwXLXHdLMcLbY74rE1fFwCdCBhcRBHW9yWw8rno8Wm4xx3fALcQTdjzeha6XMxCZTzox87oWw",
  "key2": "3iE7QuWfuU6WfhFwVUUG2a6sZ9T5ZuXqGaXMSuiu8uBbUnAGF2sUKepxnsEgVNom1KghYEMRPZLAY2Ruq5xddZxy",
  "key3": "4sERmRg7PRMYq1xZuY5vu2VQqCij9bkSoGVyvMCYo4qAFsfLyLa1Stj6sviavis7CwTrqTuhpejtq876ep1df6Fi",
  "key4": "5PU5HRjCBYEu7NfcvDMLN5A9fBPLaPJ1PnSQJ3W8m4QBZUcs1R3Uw5QajFykrCiq5d54KwKdsncna4GY7M7AfKcA",
  "key5": "3haf2M7RwmTgmsRGi1PJcBF8MpvTU1fjJWG478kfQHBiLLj3z8QnnwDpPzwdqztsggqPMyKTTSZ84c7aPkmDycYg",
  "key6": "4pUXmqwhTZ7RUF1v8UHArKK6MS3nN3u6qzsQMJYGchNFjwwMmdtxSxQ6NTVP7HAZenokueK4eAKLA8vsqq2Mieg6",
  "key7": "2ijG5baMAvN4dQCdz1f6R8LYjVmY1i4C7Xv888iqMQw6WVdWgBReWhm81LaWGz216fenP4aw1uG4HKB2Sf4X1p9N",
  "key8": "HU8uZEWDidvwh7ndX7695Cbkmop83Fp29Xi4gx6ffAysza8ojW9wiKMFrnwoN43HnAspaAfrUHmTv5dszQGxzMz",
  "key9": "4zkvs256sZw4tcfufLCixDTWo9HUTeJgDvto3PcFQkq9EmaXht5QE46jcYFTm5zaGeUZXjcMDS7sTngSXXSuQgj2",
  "key10": "4ugSBLCT92GDmYT9upLsUPHvazXhufTS8xWVKKrFY7fzvrG6kKEfifDBbk6jRorGXEeXXvEGPWpQj4WRiGkyVJhJ",
  "key11": "3nzMHDrFB4UYZaDvYaTGoSWDswcVePVfvuDzVbisa8QnzUepkjADjdR5GpzmXYDyy7f5LtXpbZytZsmtHpUXTRVm",
  "key12": "N4SQ3NdSSeFFH1uzLhQV4uQE3nJAaTkk8SFhZHS8e6BMV7v5iprHH2rg4Pn2NuTgED7VxvrNHsbaHxRY4ZyE5hs",
  "key13": "249t9o8KETUPpTdH8rjpurZyXpEZ4cwbmjR88YFv8Xppv3DXKj5KFCvRuy5XL4rYVUJN4NRmEH1moufGEisgQes2",
  "key14": "2k8yHmusZZZbMqKDqvBcibAkL8U2kWc5mmaEEMqiVTA7cX2H8UcLKfx4YHvazs14iHHSx6XJoib1v2XhDo7WjcDw",
  "key15": "2yeX9jqQq9g5kmtoAskUNpNuE4BZjmjhTHvANWzxn4Q7rP6cWeL3wbEA5GLrpZuXj8gTpydCRmdsBkGDKVh73Aze",
  "key16": "JaS3ijhMMg7JhV2iynJNjVMhTmfsoGAM489YEoyeKy8RBGfk2LzFNwCjtgRAFqcvdY34ZzozZna7LgsStUfpUFx",
  "key17": "3uPugne1VRHQHUjx2eoiTHBT3vHzHbGcfTr6pLdGufE8ZYfuYVphkvYyWZ8Kjj3zoVbte8BPD2RTFitqDYso2dkK",
  "key18": "5N2L8GM94tfgTcc3DvGZzJbbFd1NcR7SKH9gu4ge23qaYqFGbYr3GkdeHzhYfuuV2CiYoB879Qufagp294ccb3zH",
  "key19": "2n1MvvYF8145pMEisnsuMH1fNB6aYRQzysCiNWEnReRZp3cZHZL5FB6Vdi98NscpyDxWbrcVTAsmKT6npcLFA65t",
  "key20": "AMsQZQBsnU8eFDGpnHDx1vmwBWRvfyMWdmhuchiKvR244BADmLds2ngT4foHTKguAZFhADYF7vDBHw3pjbS6SmR",
  "key21": "2bzTXdhoHxDMunf4nXo5HyfWg6RCGhivp225Qn47wYVLMfiAr33UUfSda1WWALJbxkbGDVDThiC3MvZa8hHWc294",
  "key22": "4zbGh7dCmuR5sMcgLwg7imT7iqXc5MERbjHJapxcrnN9FVSHp5e4YdPtfAR14bHhqNgqDBN61s4pi5JYwXvnz5a5",
  "key23": "5gHC2iuEMHqC4ihznDXqJdXm86QTYdgprQebeLc9jEZxmVrTi64S1jMWaGLaWFwBpSA5AB4ZmQG8WEtJYY7FAdK5",
  "key24": "3A8jJPD3vZ49GXrj61aHHX1L8GEbQZybHZckthQjL9Xf1k6ybF3f17S1Br1BMjtiCY777i8tW97b2kMtkwjEAZDb",
  "key25": "2uQQaBSfmRSVToWnCPtafVJjV7Hz7hmC9yfr3QP1zC1sRMLBg1v6BakMXmAuMmMi75vEkRjLVDCiaH93uXxVZmKN",
  "key26": "4X1imDjCFgnPmXVntagKRH6FGLkoRdDnAaZvo88C89tHrUxrYyQe1FNphKFwRf5rd4TDuqTRS4qwdu8F3yjRqjn2",
  "key27": "4DofE9p8oCDgRJ8m1JYPJdy5Vi8D6ESDVphWCiVN6rLRwfjcpY1qxdfwxHv3gMaiX1sPyjRwWY8Xh1TLCcNyivKu",
  "key28": "4fpFhz3tqAmk5rnL2h14KmhJch3xkx7Qco1tqE1fNWLrxT1kk8Cy8AgcbvBTDBeAnkonjZcQs9DuSuL7PELu3KxY",
  "key29": "3dL1oeW5BWbi1MfbtShsynfRSyyiNkQ891TqUipCQyecC48bJU7p8dPS9g8HH7Co78YirrS6snYisG6xCfnRKbPX",
  "key30": "3CF7uYw5pE2t1ugh8deNAVtd2WsSZG6ts9RcWQ6E93xwnYdXPMhvxRwf315ZqNpJdZ6K2X12P5A1BUE8LRHWodVM",
  "key31": "4tjQ4Bi6gLLxRDA8y61kEYcAhdCj7z7sH3ijBd6j7gwgVkJ6W16qWFLmxYccdgtqvd4WrTdhGttTKddsNW4GUkXX",
  "key32": "2t1Us1cAqeQK7NYEVVgGDB598CjQFK5iqk8xiBDQdw3rTiM7j1EpzMrtTKmCAtvvKUTxXFSCQHMH2sbLwu4br64d",
  "key33": "BPQw75nD3N1n5BFmE6eh4sB93fHPNQxXNPegUwQKkUrKc95BvgQp8Fir2V3G61Eo48yzb4aZTPRYRo3nwFa95db",
  "key34": "4k2XJyzf7xHhUbgwd698tAMV22N6q5V6HDBWBYpjKa82e7mkZPm4ewgsNLiYkm6YvHVEZcorNACgGZCphpdyTiDr",
  "key35": "381jwWL9ysBv4cX1W3g9ZksmBZ79Gc3Nwif3hDrpL2a6J15BQnr5aNdo5wSUUKV2U4Gc52idnwEYFBnVoMzcv8g6",
  "key36": "3rbPb4Xgz3HoAqsCyTJsL78RUakTqawfvnt5x3jDfoecxe9tiBbDZ8iDtA9q6FZZPPAXEM1eu4FZoA56jmgXHPfs",
  "key37": "2PRLBsckzggZe7MpybUV413L2qM33uCVp9gjLUDwDAE8ETcwY8LTnrWZt6wGRnziJ9DYDstWZ3ZBBRbLE5tSWBLu"
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
