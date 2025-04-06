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
    "5JtqY8MD8C4EdvEdLKjKNif917uHCAW7fFXqPcMYoeeYSa2VfDFrwDKGRLUCMh2upKhzmBtY3psAQhuXLZzBKtp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVRTT8KgLBShZcxkv4dxTpgj5Yo2bc9cDpisPNFjZ7o4LSW6Yz6xU6oERFGpa67Cpb4wbHMyvWq5JfVnkgLMDij",
  "key1": "4GBPHb9Lp3QdJbS8zaBWVtP87bZ22wTHZcmFLaeFcGvPjE365cYVoq8TbhGuPyZB67xmacbVED1bAgPJgb7h9JoZ",
  "key2": "WpuhnG4Nsp3ghsywG7EKjHpQzKapTBzaasmCyiNfzHpgYmeuDSv1iwc5uFKMyjggUh4Nr1j58meMwVnQSPh9EC4",
  "key3": "59Fz8wugWPLVD95gtHyhq9fKZ5xbn4krM4xbAMqfUEoZPTAMsYFfXyfnL3D76wzhuXs1hJF3gpMyGuMP2V4d2rCi",
  "key4": "MrU1aWY9QjTgMq1nMjLpq9ge31PZyYcogyfgYwCZxbvVN9oLg1CjqSNy9mFqNvvLsB6ifVpaLWpzm3pGWxCGDQX",
  "key5": "395Pcqa9scy4UHu7LxLTsenK3Sk9i9zD8ectCSpyKbUJSxCxS9eYrNEXEVPgqWp7DM8TbP34GZWuFDHrhehvFgAm",
  "key6": "4udVJCK2yHYSpPpJaexP32zhinXaaiH7yqwsXe4XUo35Quk3zVJskU4Qam64jW5NisdndtDoutWvaAYgy9yERJRd",
  "key7": "4xCz43zYYqsh5Ppqs6DyMNXZK1hfvV5gN1y5GEk4C3UyipW3dJYrMB4rX8cvK7JVCNMupwGgiGEHQioaoo4bthFM",
  "key8": "45SAirQiFAhez8RB3bVi7YG81NPbD5xD8UTsDWe44GLca9VASuosRqgDw6jcRefS3ZxW4BgrxPqAHRP9ZbhqmExq",
  "key9": "35Un4uNaQusKx4H1SmKL11GzvdrGtAv1n1uWj3CX4kcM2hQMz64vr6hUSkLohDSbfAoU51zfnxvbcikq5sU8QCvs",
  "key10": "4dXPEPFbzKygzdgTnKdPo1vHSH8cmYjZFaETwwrtqann6kYoyzPC6SnW5FwaEYbKq1K6aDy4U2grjgT4tQpkcNqQ",
  "key11": "24acFAALc4sBrbPZMovchhds1feWq7E4kezTsFKNdrbQZgLvHVK81qGqYTdvakMuWte4BbWp2K5cnfFEMNwQGo8d",
  "key12": "2DjpNWgEQy5JWV9KySuZkt7jHF8Uz93WVELXocU6Zsc1u7ipDZdt3fhgVy2C28rP5Atruvw8QefqZLmwkurWUP3N",
  "key13": "3QgsVcn1pbT9zA38wLDxaHwxzRiBzpDNiLtRtWjKrUvzjvBA3oS38CGyS55pmTo7WoHJyTaWGqt9ai3N32BT6TBg",
  "key14": "n3pAEns7d4jQE4QFdUX1TQAubAjeJRPFE4ZLniSHCdaruZCz6dettkfXrEqawVvCiHjzjeBupJRioKsGZr8L1dg",
  "key15": "2SpNbBuZmZVRFBsaZo1GvgpQeQpSxGsSixPqTkjM5iiXx6DsisKVtL1MaTabYCQYjK2fGKs1r9pBeXpoCteLyE6K",
  "key16": "2M8pBbxNH93oeL4kpiyzQYizFhM1X2BzpmMGNW2mjZ4L1XnRGGY3zx55UJ1nUvwdHJvi3vAwfvvLrSayQZSDTuPq",
  "key17": "3vEPsq8YYXiey7rGZi4md1RAgwCqQD2QpEG3oaDZs17FrqWufLDNQ98opCqu2mi2r6wMzrFCSfgiy9TmdjXQryup",
  "key18": "4rkxAFJx82eF6g9icGnXw3Bq2pc2ABeXu29PkDHMXRcdM5BSzmB6ELv2H37fRLT1QgpRd7vy1itzXYSxozmp32vv",
  "key19": "4o4AA1c1Ua5YEDXkMwGs24FdG7kv5m1SwDCtrd3UaFTtb7W4gb4orrKA2CkkskwcgbvbdZtNncAKmEbHEAkL8pjH",
  "key20": "27XaBiJ4VLLSLfUMRwfGvK8hBw4rYvWewhECdWPDeFPBALExiBhLPVSiricams4mAuSEe7DWwiXHjKM5wWRnLn72",
  "key21": "27YeDFxf1U2CqYVXTgqLRii5rUHYJHZuS3jEpsfXZhb5Vc77V7Z9STXruwb4fGnhVuRJu6ZJ5HS1ZzK8AUEqtM36",
  "key22": "4AmNkTDYjkpoCRdD1YbHZyDYz2vbdt6fz1euT6BVWLCVnwHHmopBcjentk7zN8DNyigSHXPFNYikH1WtN4WimFY2",
  "key23": "5HXnnCasTCWjRajocFnhdM6trrjjkSXa5L6c51TueXkprt5fEmxnFsXrTBf15Zq9fMattFFejFzAR9p7hGViNXvP",
  "key24": "43duisHJ7TndGe6aiGfZmzcxomdfuPFbPr5WTrVakbUkaLYgaoVF15CkkUg3Te45Q8aJpkm1rsQqAQWMkB4Sg6FL",
  "key25": "ddcKiTMwVmsugFF5gcFoykLwxPMSuUMyiuNC2zCUYzS7fDvr2hNQbCfUCnpwQMH7YosWmE2LUmNfkTKzdkgFNhA",
  "key26": "5fRepoLA3CFwu3sT45kzxnnHjQfA4wUTqEumSQMftP2urP8rhN7osE3iZhargHw9TmW8Wzr6e8MuhNBCVnBZd3Zt",
  "key27": "3mdoNTeFq35sCDXfDhfacpYGY98ciCxx8C5Uiza32gpQKj9zCQ7LVPKF2PS2wtaGajAMvZQtXDYYhRo9qVXKFomg",
  "key28": "45kqJXpqnsXsHjU11DXoKAv9rKFCMzfitKPy5WVocvaNXBagdmE3YDBfEDfLeP3ueDnnk6umd5nUA4cr1VRWqRZj",
  "key29": "iwBC5tPeCUbwZjckg3MXZFUQE5YBiwSQwfpmZGKMjS1HFhBUo9vvhdB6U3oyEcVYrXnLZ6i3GrLpLxhzbhxNsgA",
  "key30": "3rscDS7BAhUo6nN7HZzgNq1GWFG8obWGKT4UrnYcyanbfNDCYk3YKKo8LyWoBRm2gd4CVoyY5tR2JBChwrRPrDyJ",
  "key31": "5i4wbTSoabDtEuisADHJVkcpGeT9dkQkB8NMxZYmAcALTyNZa2fNseGka8nkQpJJVoXYyNcVVoJ53sKrwVVBtzfr",
  "key32": "227zR5EXEBn4XbkmQSe1ntdxf6H1qi4zzfEhwqi38ebKwxgaSf6NGpDBtC31Hpik9BihBZH6vDD9QBYvxKd74MzH",
  "key33": "2otePoyTRnFCobuDJ3JU5pPdEcWrkTpnEcGwwcD7eH3z9CFrSUqh8dauXt9B6id3M4R7rhaCY4S5E2tgPX9ahNwW",
  "key34": "CEcNDV9TPDZAASLMFzawiyUr6nnwwQMmP8eBukQRWV8H5zBubMSZTTyHJXS6YMHAXKYKzit6sJnieTX9Pn41tym",
  "key35": "bvdg1g5tFjRj3KFR4bH2GR3FKhxNVLH7tqjphvBnC4XE5fAHrsEvmC1enb7yu6vrwzpTTv2Rtn6VLdfoUWqVnz1",
  "key36": "4z9Vz3Uj2jhEhVLGAYHYBoXZnD6MZHTTPWPiYSzaQ7v1PwPxrHdVnfcBRuWJvozzwXEqnr7QZUwsvHbue8tNRVpa",
  "key37": "QJGUYatSrHfiCeZ9qa2nWFGQhTvAHBN7Rtw41jTwpvpjZJ9T47BBPK38Fo1Z1bS7vmDnLEKBd1CUf4Zdk9GgCPM",
  "key38": "2vMdCGF4Yb1ZyWdsFW6SQzEsnEBQ1SmyzapxXEeh3VUWR3h1WsrczhmHnrufyoQvoxCUGpSwWhxu3F785iNQBuxT",
  "key39": "59oFdYi84NTLH3MzE22LwyTQx6kkzYVDdzHbtAxsoXCVqcYxXGfVDABKDr13QiTAiexhDAoSuSCTRdJHGknZ4va1"
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
