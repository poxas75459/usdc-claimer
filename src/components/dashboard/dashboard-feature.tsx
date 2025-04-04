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
    "4ksu2WTKvU8FWsTGrbkREpo7aWt7cn673gTAKAPagPXhLCgGaWQhfypdnkBbrC6YoG6Dk87PCRdJQX7gU4mp9ziF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8ZmNpsPdsWvwzdAxP1Hf9JEsLFYavbLQjthBCqoc5z7XXonRgea7GCyvxzJkhiVsNpkCzTxsvHB5fq2n5ZGa6A",
  "key1": "2fSeEDD4HvbTXNbqew3borXLuQw29K32KxVkva75krfA4zWXRaRQMX4aBvGRcVVpR7W4wyXPZdrVPEPcKQpLFGYg",
  "key2": "4YTQThPSu28Lx2vrTo6Qb8UKUHGhMZHdjUGrvanV6ZdMHruUFz1WMf9zu8Ac5V31goG1VevPm2Tg5d8dk42DHrFf",
  "key3": "3VuELfXE96zqSNZc583UJ7vso7sXVgbHhwEuf2S5XYVeLGVpFHQecTHmbdDpNDtAvzZL7ReWj19LBbF42T7adc4T",
  "key4": "4tQ7K7AVpqou6jxmf2r175FpUB8Vx5Wd1G7PzM4Zm9SCS4VtzBzfpUxR2e4oBcEWzpoZREpZseUXi2XgaAEJQyF3",
  "key5": "bmkxQQAskLwmQHnAFWYsxrKqDt8tip245LAPWD98j7uZpQuRfC1QWwGzT52zLXQ3pCJjgj2Wnfj7j8WHsaoHECX",
  "key6": "jkBzPod3YgeWVLZ5TJ9ujoVaT1FukjuyoVofEmP6qjVodQKivJ1AqAqH88dKvnUoPusmR9G1pQfhvooVMGAyff4",
  "key7": "37njfoh65WuYUBqju1Y3uxGoyH2cPKryusMMeGX7bKhwwFPYjMvsWf9VNRSzCCax7vB5868amm1NfyDfuK3FdtSu",
  "key8": "3gAvnncxd4aBn2LNJLq6XtGEUUNZinKnYqtaig4Jr6TezTkUMosN89sX4fsKNBCaUpK9iqGKGoCZsQ6jVP3BgiyE",
  "key9": "pmfG5yN3fJt1m9yUftqBoVmLKM18AKnKXTyVTSyRkZD3oyyuUyWrAXXwLtnm7fEXrgqvSiEgzqDHypMUdj3LmYD",
  "key10": "4jqBPMVXuwV7bxz56BMyb5EJbJVXhi9RLvb9iazRBxB2wgqMBdCx2fwVihYjteXmyqc6p779XTurB39tBihHBxYt",
  "key11": "22D3ZHvy6BrABE4actDGpbgSkZM3iDikcCwXZAmZJeuPtjuVtGRsf81hrHiACYD3VQR82JaCroegJc4T4YG5GSzF",
  "key12": "63yufdbdzLLrXEPBZQo2B1UenpbVUT1tD5ztVWUrnqtRYK2utSNzu6w5K8t7nuaXZunZ1GLY53Sz5k6pVA3bXPvX",
  "key13": "3RdyDWoYZg9UxZ3fXJpfnz5jP3fU3F2CjRVZeuTgMaaxzevKyCNNrmXNZiELYdomFuTBebQ3PVMChTUXRKWBaGhX",
  "key14": "2u84TXcaBA3miV6GRzeUivRqt55fH9Nhnr5sbxrW4wFy1jCQ5NkYxXBF7kxKrAGKtnedDoyrZoPGsMgi5n1jVC4a",
  "key15": "25MrnjJsu5VsZrdMXoBHa6JWdQMcF797o3bR8PFeqT4ibg55WvWb9xS4eWCjgx9JtcHH4TqKTr8ugs4muARKGQHw",
  "key16": "4DuUYBUbLYfXd19VErBAQfNUJchgdRkNcGx8ryBN6suLsZcMpPEBK65bzwTnZK7M9QX9oRSxBSTfcNyzhx5BRTFe",
  "key17": "3pFRYo7kadV3HcfvBviHD8Fx7bao1dgkKtkiP67mUAVrZWdgscsauR6Afg5yeBHtRADbQiY5cEa23GXhQTTpbQYU",
  "key18": "Gtsyf1bEAGcvZETuTKKiGQgHTVUtvV7HKBARPitMnqusWLCSmxt8HZWFsSw7pQLEtSeivLZ5FasnPM22FA4n8QQ",
  "key19": "2EFpUHyjh4xzfjSHKQ9Ty3x8Q6YvDZXFzxqu9A2ef5CFU9zsbUMDWQmgHFZ6vSzJLGj1de6qDXMg1vhGvKapayed",
  "key20": "23KNgfvrUhP6tp9uYhePJJ78A1PZgH3YgjBHvCApKjt69uh5789q7qJDJiME5Yp5Vc3MeHhPgdaip5aDJbb9p4Y4",
  "key21": "3vuBqZpPwTNMNg17H2wfgnnVQTE8uQEouVXacNib7xdZ3yxHyPB6vkT164fhdsonLjB41Hf4HcTAGv6v1nbW2AeZ",
  "key22": "3ffw2iKv2nq6c5PMZLfGVVy1XYFEGdqL5XMTfQreFhcvGag3Uv1GicN6mA5WAsZHu5pLCqANhwGMFNGH9t2Nhekq",
  "key23": "4jr4e9XdgEtaFMiRqq4yhoRLruGzTQfP8VfAiZhNRnzpw738ZbLSeyJRCizAE77pj7PGfMnzw8VmueTttwLkZxDa",
  "key24": "nXxZkvwQ8dnPtH1nwaCwGG4RtGaRhXs3jTM9mqJabGUXhAXa7Q6XhuLXtnHZkJacxPSt66rct4XoqiaUBynpgX6",
  "key25": "4zbb4rYyNPjqmSHVAaJVpK9xYqw121X4zJdeo7JzxJT6fgJfgKTMXu9gF2NEdsKwPJsaVPKKrS5XRu1fwMcwDKcz",
  "key26": "2UzKZ1pmW6HzrUQePhEvNQTdeVSBdjvQJfHhvmPJyUecCocr9FzWHpHJo7Dk3ThjDXUf63VtF8juEqZ6PSbt8MQD",
  "key27": "2GrdpmAkDxQKs8bG55tUeFBbfy2mwWFebBdszchW5nn4fSuJCiXNp21Kb2hEjbcDtPyznG3FvyhaiL1aaTBt6p3G",
  "key28": "2SsCd9dPpK6fsWiJqppt8Q4WT7pkxFyyifxPBtxHdJpFe6frcadqCLggJQtazJFwaDiTgbaHKBi3P2JRBDma919n",
  "key29": "25guDGyRe7Rvq7wxrG4BbrJFLcm5SzW5Jz4k1T35kLW5q8sptnY7GanNnVrSZuBgqGVhpRMkLnPDddfhBkHKS9KK",
  "key30": "3UDo89AZxGyLk4AHyshDfN1jB2hmm5vEaKVE9rUj1strLAEhNbq9prS8tKT5Acpwx7kXF6Dj3qmZu5kX6btwn7c",
  "key31": "5MjNPqiFgj171ftcoBeZdeKEsZXDEt3xXRk1BedbZkdHhSbMVfBmiutBknFKUNYuV6uczCynvu56mQqU9cK6aMKd",
  "key32": "2hHWnv2WUGqbwCemjig5TpadLEkGBSv1Za3K8v3fQ4HXFvEVnXyUnTuwgQpQCWFUCywrzxPJMVwhCn9pj2Ehe4Gj",
  "key33": "2964VXcuArntAdaThLtUUaw2GXZtDERhD2cgTRUTJteeKQuXt6Au554aLeUkysVYhxCdLNxnnbbBu6MaNa91w6Ui",
  "key34": "4qFobXfSaYpf7jDFAUwwndaaDx3Xq7rt5HrXanPJsEyGGbjoP37DN8rjovhynp9LTuchnWEAwh5bXJqc5dnp5q9W",
  "key35": "3gWJ75oNVeNHKVkScRHLLuSHfYFW2giqjgAm4PvZYa3YH6a3TJQhEfmm8PDTgkq1gmbfYYaw7jh3zietFDyjKhAB",
  "key36": "B5ZV6z3u7ehnR7biAq3ztEE31YVWoAhde6qzNWLWswL12NpcbspLjYncJCm6nT1m4sQqYoUSSaJyAjEN3uZjqaW",
  "key37": "4CRVabdQdUT5PGghwwhza6WmUDg9zd9JTNEsiqBUCdrM6hGm7Z3MtV5H9yAPrtTgMy7YiqYjtQptsT6vf4ihvTL3",
  "key38": "2kTN26EcBSuabFFcmFrKLmBCWn44LkDQo4FG1PtKcfrEDkwjPgqF4jWPaL3eTfpFhbea2B6wM1Lj7KcMcbWMKddV",
  "key39": "2K7s919V79Gb8jwWpTY2aMMGJGUcuGUWUKEe9qcQtxaLyXeSDN3yrJhW7JnyQqmHZxUufEsJRs9ZrdNVQz8SqtUq",
  "key40": "2tza2cPXKNEjtGkEMQMDyh7fBSBtWD3U1on5DvKpX2PyZVaSRyUENj7YCMrmGxv3HmRFfruUX9r7578r63QqbpAR",
  "key41": "cGJkGCPq7BsYuUC3RYubBxKgLrwov1ybSYvy3bnFSAUw3z4UrWn3uc8tFjuq7VeRGmaPkNLLRdAoezKaTsqmGnC",
  "key42": "24UfwfK3TLif4FTE6oWS2p444ase4qVZh59Kdy6yZ6CwCkJFEeFEPAqsEjrv3CzenVwLDwhhQgBQ2D8EiJJjmKXT",
  "key43": "3McEJPy2cDHAsA3odyNSaepQCHzteDcg3hVGAc4XmYS8izEpJ7sjxhDVMfZ4Ha6AauedRcXzjsjRHKXUKPp6gVbV",
  "key44": "3bA4arFXmueoYG6pAXGVn6WY6CwySgCFNCnbdDzwQ46HTh9V6pRQ8JRixHesgXqwvTVkt3vLLD23TLTiJA3oi3se"
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
