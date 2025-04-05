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
    "aXdm2xZ57ehMa8dBxwHWnzPwho4Mxi9VVnx7HoG216Dqa22Hjp4ZAevA3YU7j3SKQn2FNB4Zg349jKYpDQdbUrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAZU5uFpBtSvzYTVshWPcMdTeetpsW7dHTGnZYnr8rGwo7Pyvsvn5Augt2RyFHCBTvrFNu353ZMcbqYdAChtMUG",
  "key1": "4tyUNAhV79N25dWgusa9RzcazV4wsFbroCu3UJJhEStKw5Uye3eTv8sbyxGNQbQ4S6VGGev4riKECxaDFyTxWnFK",
  "key2": "4e9Sz1podfheLbUv2ihE2nqTDVzoE5GGrh5ZgZXGYEooBTuMBLtiWVEa8QycjqfPyd4R48n95LADWbDfjfMkJAAF",
  "key3": "9HfReopzE4Z3iLPi9j2Lj5ckJaWMbSqFkAkp8yR3HV1wnc5HyiAcuen2trNQ7XXKqRQGQ3p4ttQPxMcUe2hTLCK",
  "key4": "J4w2Hy9PR3aqaCHtxy5NhBJhY44XJ86mnr9WGsE5NCHMuRuRtjaTbWu8yFVRN339suwf9YGZAPFhE7uQuy5gKgd",
  "key5": "7qGAadVd1LtUrsxCntiDTXcUaiNSaFVvte7BaheZck6mtPCwtsAa5Ww4B7KtdfkqnLgn8srFFfbKoXe72BxuUUC",
  "key6": "4CyqjfJunszfvR52LptbcuAspwiPdcoUEB7cd92ESpbgoPWJnbuhjd9JDKNXEf3TCBnvuZjmxX9wQkhToihrqgCi",
  "key7": "5mPCXdowtahm5oW8CuuaQYbyiNALN7xCwdx6j1XuU8AW1FHvf6gufuiN6Eaw3W3i4PhjekEtCXTJTvUs1J58EsLc",
  "key8": "7UvcxrEjTTZAmFcJZtrRAtNuT5CmMwkKvTHr1GkH9aFzh5LjAG4Ncwr1LbVbh3tDrfneVvxqgrppKkGEySHSqPx",
  "key9": "3BuTMfFcx1ARF26YATPYmxcNXQWWgLZuCMztXSVfa9ikeHAyUg3fL82jzfeKFxqSDn3JL1a5Ri9EZ6GZgyiEh28K",
  "key10": "rvqRu22qQDLZqV9JPEN6PJczjGfp8h22GyiVQ8cT38f5d56ZyFZvDixMuujE6UkEToqysW8yiMySEqPsfCAAgsJ",
  "key11": "3uM334rjqnjSMqXcLSc5SB8oxS6Ls44K235VhcSY3ko8v5HYrAgYLaTsimFuAQpd8FUdtBpArYUFALWyNR6G1nyY",
  "key12": "4CiapCmEehZAYCk4GshwoQTMtCuhQjF7C3WZcCeRbGMYvsxoDWHmnHGMBHA3vu3b16zn6wXZJoWqo2PaGE6WAcjs",
  "key13": "444FF7zTZMTosSrR7KYHheWtx5rtCcpiNvdswsua4qT3ajreV8fAqA4Bz5K1j5mhRbEow2ynbS63evsG6T2KbTg7",
  "key14": "5bmNGNTSqmcBJcfteWs8ACUSg3pK4UnjbrfwFGM85cKFhVqMrtUdmFq3VLeAV8fU3XkPRapwCTQMaVYx5t2dBfvo",
  "key15": "4K25mV1ER7rKYmrhkrvS16LJVvAm7nfQTiDsQY9929aM2pkoKadn7RgXH95KP3a6rheRjpX2EroD8p14tC87rpkf",
  "key16": "5R4dLuyKPDEAfHEZCfvYBi2hYr1s8Ub98QLAwy8p8aASUhyPuM1teTjwvdZpVxkxZPSu1mXBUJ1XBkdxiQpNHyxa",
  "key17": "2W7XpfCDEy3pARSkcmHtASDQ4wxdd1cWR8Eiwos3ub3D3yLE2BxZBWDvuhw5XZiMoRHC6fd2Saijz12rr8caPBho",
  "key18": "2udJsb7UPjGHMT7mVm3V2AuLpmqpAgCjh4Qd81oqY2srfz8JnGqnVgmoLBs8vX6UHYtqG9DNZn6sDM3ddrMBEySs",
  "key19": "bmraAQzVA4NNJr5QTX7Hn6stGQT8tw9UEHSqDypGyVD6X5JBXvyQieNF7vU4xfych2aNhNMptzbdA1fv9mmaY8P",
  "key20": "zeA6x5KAfSwmZn37Yz1wKSyMdAvZpNWFSTpGx6YDue6etSMpbgG9YgH2RoicaH9o9UtVCsgNEL5dMhiXh3hoHrk",
  "key21": "5Wj7apT2mxhxW92x5ALKdK55sJ2Ag7qJzWrTmu7oQ8fsy5ejme2aPH6eyCu9ostzd2ZcdfDHi38LZumVG4jj7N1o",
  "key22": "3i9t4t7hjmuGF5ZaYocs8RxRb8QbrhTr2pHKi9JqXwgrMMuaBTWgBqS5duM99mMGXsCqdVLXoMbmDUTCb3xFAR1s",
  "key23": "3VvVYRpCKXAr96eA5YRnatX1MAMgTaJojtrVoxZGbJUEAEB724RxYhZJzwNSx4QVfnM48vxqFj1eMErzuz7rtDs8",
  "key24": "42fRKh2iK859buJziPPAsmLtFGim5mAwUC71rtR65Th82s7Ljusb7WcXndicxcGtRFjmWNLLua3Kx3Ggyh8jT222",
  "key25": "3jc2XruJ6UVxDFf7pwWihjoMne4EScV5HC2Lac7nqopURXSpSg8xRL7ZK7ww7dK8dV3sRVQuT8kwgoqr629XvGrM",
  "key26": "4aGD8qgj4WqbSNRB1KtM4ZpreP2w5UpKqdWGcb1gPRr6AFb99GNXoFkoj1SzVkQN1s9AnYYY2LoSohcVMUnUd84L",
  "key27": "2vudTc8haz7dSn8iA8NgD1Mtkz31kyi9iQeWRxXW83eto5rnAu9gJHdzfCcnDgCo3GvLbzGsd165xrsd1QR845Jo",
  "key28": "5Dne6uWkktoME1WpYfaHjMcuGj2HUZyGyAey6E1afVgYY1vQRv2jkmvkWt3usnHu8qSPC4J6wh6kRsXZnQ7W8W6K",
  "key29": "2SqhQJxwy2iaL1ZURKcM9whhtKS8pwfobWfjcSMPxfvD8Uo4yeiQWZLtKJNzfJVHncByxjYweXAsxdDjY2Y7i8Zy",
  "key30": "5E1eFRSFu64gYp1Q79WyB3b8CCXD19Wq5eFzntzsZ89F8wXgd7aBNHk5iYWrcUPWdYqhsEEeDUYuojo6t9JC4yUA",
  "key31": "4mymtRCc1xg9MxViTEPbJB29S8wQM8687LPZp62qEyNrYD6t5KYqHdvogo8n3xESfmfST59Hich1B2EhhDL9oGM7",
  "key32": "2YdvFWChg2GHwucxUwNJeEjuRGE4nUFbcnUo1DBia77D2PV8CrcSbX14UCfLxcXbrpafSoLYiN1fDawHxk1tZXkP",
  "key33": "5Cw1QYC7UDFVEKb23ULE7wt8BKVoXCCFgP282MY8RTYRU361PXkxFRvBJn1R3FH4LKysBaVUx8T3jkjfbKyJetdk",
  "key34": "5kc1jfQtyEyaCTZVAdjVWuc4jR2Rp47qC7SeEzh2Lv2y2gejBrU8VTNNNaif3TThr6idiV6yMjdvWNeXjXvZo5z1",
  "key35": "J32yVDNqv1qgMLYdbyvn9T6v47RkQfuvuyhvP9hpF4PgYB59r8U7Ca8niFN3iyqX2aaEyj8PY9UThvoxP4CVP19",
  "key36": "2fm4BWPVXzxCBUrdQPNTwymKfwCUvpQ8BQBf3nzveGaM4NbxKi3Zs7Brp5tHUuYn43aiisF1hLdW7WEh3CCrUe1R",
  "key37": "2GJemENttQbikk3HuuS8caaArXzczyxwpLa5cCMAgqfo2zE7GBQBhga8mii7LmMLgQdjmrMFx8Pb3EdM28vi2Fsy",
  "key38": "MoU14cTCNKA2bAVXUHG8tnkxs73fynKyCGoJn3XxPJVZX8VcbFAPeMvfphKqDGXgnSQvKR1mTsrzw5Et9ZEecCH",
  "key39": "35C62yUb6UNNtTfU559vAyghV2GNQwkB8tjnutzqrn1up1JY6gUSxQ7YEkrAjdjEPuzmcfC6dUikCZQQ27p5B5QF",
  "key40": "2wcJW9qBfpqLTE7ZDRKo1nYLKRVTPB45LBvTHMTrvAso4wJLQaxDpQRdpLh22Z58us3KeCX1Yo7k5EBMHB2pnZiF",
  "key41": "3sNZv55maUV32eeUmDccmTiN3k7g8LQvf2D7S2TNXd8rFx7mMiFLfyKVeGkdrAw31ouA2gvE6BT4P7HAw5rraEUh",
  "key42": "4h6dqZmxWnoouk4fY3fd2b8RNUzQ4jA9m5sob6T8T2bZzNqMLMk2h4VnRj9UuiRJrfdyP2dm8Dp5Y4WKDRFTitnU",
  "key43": "bXCDH95GhfUhfGCBZP3FDaaWhc5EvCPoqQtRw5opzDfJ7QDxW1AgpeTThf8Uak6sM7JS5VqEkmkKBEPhYvitWr1",
  "key44": "3h4Q92jcFmvFQYWZE1iYHryocjpGTyhPKbfWu9ehSRkcySm7cqDKqcTuAAG2qWP5nw8FQmfxvN4etjJNR7PjXxq7"
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
