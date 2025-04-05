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
    "5sqgBtvZP7HZeL5UiMdt54peQTZybzsmdvXrnR2s6dXQBb6TKFUDTts6rr5PW1QSzR49Gr3DFsbzv14G4DJrsxY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aaX2f9Vh6am948QFw7N5MVQymBg4pNoPpLAWfMZSv2U24vA2gm8WnmoTWahS42EBJB1Hh9ZVpWHthvaoPEsboxa",
  "key1": "3oRA82stTtpaJ8BsLtADkrLfnmNMVjYE95pu9DzoZPdr8bX195MYcoskR2mEdcLbV1FnHpN86UGQp6kacZvHmuiy",
  "key2": "34bTkBComcvcjVEWen6DBDH49fUWioATL5FkKsq8gyPNgpLoVTMYdN15BEEqZYXJEwPaf6U3dSwyRaPD4gyzXdxt",
  "key3": "5KcTLAspkQ7874DkW7sc1NAMEFJ2uBmxaxxeRNGdxn6NMuJTWrtYoLpPkxEfkFuHT5LJwkLDZz6B59TtcjPvrARe",
  "key4": "3aagqpLrFWr6AyhhGcScPZKYtWK89dgwXU4vMnCZaXmSh7MDR6hRq6ESuyb4KeSFN6yyvGKgYjHpPqUCZ5UfWsmj",
  "key5": "5y1dxYLT8YhvfzpKWxqPu5NYaoBTPGcZeR8Dqo3W2QPyVX4u2Ycx1FUQFVAdPyn83AW3B54b4sAxPDdYhUfprCXu",
  "key6": "34bfbKaahWUsP1NNvUwBdgQKR85M6mXFhNHYKMEJ26JYu2CCXkQ8WiQtrDAye5cCUbmmhymTUuoL936Mi1aFVYy9",
  "key7": "4fP4cbMn6zXqQWBDe3Zm236bBYLaQBuSNoErYTpYu5K8evxyEykbAkeHYBnuHMzVQ5pBo2UJx4oPHmZb5zu2kFyi",
  "key8": "195DxDkJDxKGMxiJRaxSsCryUqhAnLHYYrMSP3xhVYTgj1VhELLSTiYDfVcQr52hDdkgfcyEWRLetcVvKmMHwXu",
  "key9": "4wMWMCpHJw7Y79LjTkzEtc73aGmtThoCtgcHJCeVugcgfHPWqycHcs12w1HMNGNimw6MFCGkZMfAHjKxjpaQ7pkA",
  "key10": "3mzLR99KnhZRUTLGMLJzQR9io2d5BQgkBCEiwiSXPihLwvzbTXFbMCkhSP28A6F2rhyS6JCLnEFRXWxSBf9k8HHm",
  "key11": "4YhiZBUNyhb936FM6WPitEDjRMroHDaDz5VUuwgVzURgi5Urqz2oy8uovt2nwqw5QHcfzLLjFw5CbjqyQn4q4Vdq",
  "key12": "XXPDUUoB53VZ3YGgtxKpu6s57mK4jK4pExSzAwiQJQr2w9m4Ufp53uDM3mr8gUkuisFTCFVcM46zu7nFDE52fZj",
  "key13": "2PoTbdV3q79kX7XStupfYekFsPc1StsHaUNLNH6cyGKhqSevCqWmb7PdqMfMBf4dxk97ujz9m6UWMXEPmetEoeLA",
  "key14": "3KCLN48AxHBtozBGyMgqRHKHdLbpskAvgg4oecE6uLDTMYQD1UEUD88kgdsZszyTaYgXCigPXgFzW14kpMTChCaL",
  "key15": "vWkDLGP6Hp9GAQkqTHu7cHK955CyqfRdxAvVhSKBaqEajZ5sBQ6vS2wK6tdpW524FFBmvjh3n4ianLiZQD9EdWb",
  "key16": "3b89wntgnzyu2rcqaDinAPtXY16iApic9hsuwim5Qqhr7UiDm3tRpdxUArCFeDbBbicsVHs48iqQ3FexRzKS4SkH",
  "key17": "3rZ8p1casof1x1YgVgGQyjsnUsiaTsHUsczEHdLx3rqfHg1QHD4oU54cJQzpce5UYUKY2rCyJ9gdMhPir5VnvTEY",
  "key18": "3uUtf9oEV7eSSVhV8tYKmm7EbexTAZSnLZywCrPDVuEiUtdiXb4NarQyGFHNV7jVjxwVoQ3xckrBneSDz9WWdUsV",
  "key19": "4DvH5Sbq7KdCQKwEKy54JJdKCF63aS3VrM4szSpfNTTo3qzoDGgw5VjwFAhoJrMQ9N1MihSjWWvzvZhTeNdVCfKs",
  "key20": "24RMLiJEnhdL7pYoKYPQ5ZWDKn4o5yfjxNkC2o9smnAY77tKjNqTpiYvtsXtJzbCrqG95WzpYQeZ3DYdbKWzn9p4",
  "key21": "4tL7A3bB4oQDMpe6urCaPRdsSWksPkN9HUP1QhMprt4wqkKWLyFGaA7LjtvfxEbjVsCb7B5piiKUcJG1YrWPmHt6",
  "key22": "3qbZbuxDB5Qcy2ySKMM7N39V2q71ydYj2g42i5H5cKiLe4TTdMky9dvVsQ5vdtvRtz6dC1S7uJ8wBMprBsgoRC96",
  "key23": "2ZW8UHXK7iu5qJ7UWRUKPtbnetWSQtxoBGDRy6pDAC4eVTKWiGqEPWaZhAwzmb6FMZJ3ap4zNLHe2boiupiMMaiK",
  "key24": "BvxEPD2nCN4cmGYCsKarQgmsLUcLvfGB3VfqRZUSmHFBBYRGi5asZKh2Fe1Cm2btoJgQujG4ddxZUyoKwWzf46X",
  "key25": "4SfbnKXaTdwXjjTSovzmFC4HdRGaF9covPcc4NTRivrMDxo99LB9EDou9Gbre9SkCquzsRdN4eV1nnG6BRMEHmZg",
  "key26": "4Kx8fYLKSRBjTHu8nhb1wVHeUnCXjKFi7Sy9vmHCZ9Qa4XgogK7vjwbNsQMKgVyQad5zDgSnppaNp1hoEdCwcPFh",
  "key27": "w6Q3MJncyWRbqndmC44H2cxTZiSTgPPzekbPbDr36hDgghuCaQ2ZiqduduLwR7nh7nqQdycN2nqBqL1fR76ckHh",
  "key28": "DJwhKvrdiwPxHAAL1maj2P31c3FvM6UgwDaNoHKu4hRyToTDf8oL5k1XbjxWfZuoHMTuepbSd329ri3PT6FRSyf",
  "key29": "2Qb3cVJx8rFr2UBpkus4hipqACyDnYJVEZ3uTbxXzwPRKsAYvyipLkr2V6yW2FVCh3ZSKSAR9j8q2quLM2PJArtu",
  "key30": "4iaBmLNw9DhuAdieP3kgp1KCv4LisEFwsoR93JdcVr4GecmZ4Ydmi2cyksFnvcNhJrui4YrfesUJqds4bvnuEuEi",
  "key31": "3xK4DWBo1NtS7unyHEiQsVfRexWjBuhJg4DNYNxAQyzCoyEemXyx73JBUBy36RwUDg9vzor7GDYEhAaBfceeJdG9",
  "key32": "5TcGRFzmof6Bbt3aYnts21bijhbDHdqhusT7574LQLnrZ3iwWf4zhco88XktccpMRugVhgoSrrjrqD9ZEvGbgMK3",
  "key33": "5ZrPWCk1VobWThowGx6HJjs4xgV69b8qxJRUN2kaQqis1F3phMb88SsCYKZizaodniqURuh98Sj1mYb4s5pTg5sV",
  "key34": "3XYYmFTqp6cKzsMeKC9QfvE7X1zc9Z5LB6akA94wikgqB4thxNpZW9qkzCW6NEmDCuEqfFxfChpK6ztpbmxkPdaG",
  "key35": "2sG7E9huS6yzUhZTnycXER8ZiKtkcuiZ2dkAqGoDa8gwVH7TyzfEX1cyTSUe8FmHss1gaEYxgaubguTXj1ka9Z8w",
  "key36": "3TWnxgdGVQQXhhWTqVAiHCR8gGfThvzVhdcwTxnJmt6bcKNNPGvAuQvBACKhDsToPXvYS46nBrRRejMnzmpZrwRT",
  "key37": "5c6GoPK8ostKDq29xehxRpXuPsG39ZP3F3T89b1uRDJ9ndi7cro3eYKkpXBj21U7kEEzm3qMcQVt37KRtshL1CsY",
  "key38": "28WfkEW6c4LP2J4C5RSbssWEX9c51fkELxfxBWE2DPQsyStq3oE5hxkQzEqoSndjoAtsJZv1tqsgv6Lyc3C8gphe",
  "key39": "4aSXSZa2jgL4V7FJCtGH5UPRUyEHksSvVzn9H927EVc98cDhxj5reRtkPKiAvxoVSyDspjXRVTrjoAeS2MkCoTxX",
  "key40": "4aVjtzHzykjJetKNedhDc4S4i1pZGXPrRDK4no57PBH82KYUtjEJg4vojgMWvBWW3Hnez8Gx2FvLU59yc9dyZwix",
  "key41": "3cWpvqkKhLoExJuAVSKr3yTbzNDQH2yLf58EgeFhjW7k9zUhboMxtQp3ujULZ2zfvhxmiLybai859njod3FhzDLr",
  "key42": "LsGQytBMd92C3qS7YYQW3yndAirAo5afbWf1pyw63GmLEnvDsc5TFWfqNzjwhikn5LyUeJ8qBVnZLDbVQMCHiTn"
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
