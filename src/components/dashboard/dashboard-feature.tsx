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
    "5NtknfVGtGbWK47h6P8PrTM7EUuS8FMTYZQuF5y3ctZDey1pSaNvK8Yh4RySXWPNSMiHT6tFSHZYs5653JMdkpHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tegigVjSefTnY4wsu5n9WczSW41rTnBtypnAvaHsMUseeEG6yM3M9ESnAEJacmuqWfyUFkYMjZ6N4g7WrZvrQe3",
  "key1": "41xEds8fmEcsw3gyoubT3zjYfe8ikoA2akdxx8XiRqY3sw8M8bSChdLr6SJ1Gf8pgsmfUN4sU9h5QyTzTkVtiEZt",
  "key2": "4fxPct61Kt6H2pVdjuXSR8mPM6RvNvYXsecgXVUETeA2jaLgUmbPMnhDbQkumrTWWiNDJ9QPAqXA73HDZ6bz3Vff",
  "key3": "33YETGFT5MgmZKYq6fjNkQWprL6b66EeHoMfy6LhF4iZFiSX694cnGJDjyxWiqfNLNPVE7bd3a6hmatGn3GsxRe4",
  "key4": "4vvJpEjXt8UmrQFBGLKBwFYbNFxdWrPWfspAzb9DutmMzCRkM3DaCc5tRdYiL2jLJCZ1NyrokWwcaF3gsyoKNm4u",
  "key5": "CP87ANMGUi7mErBmKC7zRRZaHXWp9WgYEfzj4tkirbroAtFJFt38v461QgwNfNV5aWhn6KkaN4vLHE2GgZcSvwF",
  "key6": "31ydgs3pk9JYeo5AJJF2cNVaT2LSjikqi8vwfDHxziCty515odQUiLVaJT1zX2Yt7V6JbeQoovX1M43BSNVT2yA6",
  "key7": "3LxVFsVtruTSnhZjXFtgEXzXvXinPg6QnfsNXpWu7XeeRzV7QCJrMJnCuTypBSceLrTKKSM65Ve7WrHZi9h9ssDU",
  "key8": "4wU6TUoq711y52ii3WPg4gQhko5hiG9dkbBQkwPf8a69hNgzwGaiogo8h4gTUevHSQcwjfUS6ytKjQoSozX2e4zy",
  "key9": "ckoZ87PKhZNE7cAr7Wj2AK7Jmtzwf7tTds1Mgg8pfPCHMkHAUtviFKyjxbmbB3HKR65LdWyd5dtMuLMRrXTZmng",
  "key10": "5T2YmYTqD8XYfXpgrAhXMnw9UXuHE7uDh8YKkyELoqAcaHG88HRL3BVC5Z6kJRqDxLCDpYBCLBCvsEra86YxtsEf",
  "key11": "5gefGseAh8x95faJF6s36hcVraVEVfTAmJUrGZxsZUaoowTJnXAkFRdhbcMr4LXB8NEksbvrerkuYMPuvkpqohve",
  "key12": "46sLefgch3P1ERBwJ3rDKqizZhDygpezbcNKKCX2TkLx3gBUBTfLdrrZwr29VEzYKceZdmLmfGUKB7nC66PGStLg",
  "key13": "4QXP619dBaEUzrLeNVbs9tLQJTfaBnERBfpZepF9ZWwbxzLwfSiCHhx6x75WEwqVBM6iezXVDsq84eMvqjWesgnx",
  "key14": "2WdMRejM2JqARYXGK94nsBYhN1tLs9oetY8VJAYUvMUoHVSwv1Cdkum8yNgWFX7TF9ZvgwzA7chPsDMxCjy5Kf5s",
  "key15": "5K4rsnufARMLqoGfVF6th2D1x6sKBA1Q2VpGgEyDZhZAo8QEYkzJjskXc3CmPC2XpCMqMoxovaWPaiS6m5zvyawU",
  "key16": "jWiqH1XUBya9uKEm9MixGEzYsLbV79W4z6fYg7Z2L7xrhA3poss6RLLTBn9zHPwyLkYQC3Qt1cKyovukfAVidYK",
  "key17": "QcpG9E8jFTyTVTTx3m1x5yWfFeT3meS1sGgUubM5jLSgUUBAuh7q8YzhKjmG6DMFFLGQgCYxVKpmPJkeu8zcFMZ",
  "key18": "49z1sQd2JwXDFf3exHsKpWRFTBtXYw3qMTVNfZUEVKvRbPN9AY7yfEyhzftgVJqHkrdqJeNRqstjFiZdkuh6o4vh",
  "key19": "4mYkxNRpZ1eNAVpYauS35FahMSxqSWyMmogsQz2gfKU2ifD6xj881CFKnVNyXXD5Yei5vyZv4vZvay236ag4PJwf",
  "key20": "2JmztAmwMaQLeQh4S8e23KHixtiQMrviUodh3ztTXWezYmE9eQMuQaqn8pwiV87SiCYxU5qb5CuJkMbNK64GqUkg",
  "key21": "3y9DMmFKb469PcRdmVfjZjb54HXXBvB4M1TGcqtM2nZjm3odfZvxcskNk2QSroiy8AFJd1fkJ2H1CByMEUWZ7SVU",
  "key22": "3qmWqMrGzrJcL9kR376awmqFsd6Jj3Bk7dUzCXD1gdHqmoK5ar5ZY81LYxvbMQXR3mUpRxsotkBYq4EMJTHR6Pot",
  "key23": "5Z3U976tTXmr3MrWTYMRAFPrcmJN1ai5fVwhUHxSbGJqXUkRex24MJP9rctrFfX29BXUJt33S4EMsMaPfVGiM64P",
  "key24": "DwmVSybt4acxCBcuUKEi4M2BtkTQ7PUrsrGTAZfiKfatCkQngKg1rmkYWnyh5C7Nv4mbqEfpN7trVf18C9DgB7t",
  "key25": "5iPxJQU4GyPZCRbee4Eq7aoCj35itvfTog1SDKSudd3sJBgVsveyWay4t7F4qU9xbb1HrN7fWsnvPxoCd1QRdTJq",
  "key26": "3t7HG5hq6LnSpqQNxhHn5YsxFx55vTSCSVi3A5GQk7pJGxQMb8AZMGYEfHa8iPPTS8amyZtdwiDUhbQFyFMyFSZp",
  "key27": "2gwGypLe4LmM9Xdo1Hrj686YVSQ9gkWCBBycS1G59MFYEdBPusqtWeLsVC7WYR5SaDSZ5r64cgyGHPSE4r3dk2K9",
  "key28": "25Qq3J2yLa8Q51kh8UhmhmvoMQGXM5jnPKecRA7sMEUEdTA6WpXfnpvA4pkRpN64pdMExvchPFtcSFrYeswacG1M",
  "key29": "29WAoor3vPPuB2K49xpSQTDiPzeKa6dx6N8RFggmB7LjtJYfnikcPVfgsQND2NczdRmUkwu48wezR5aekvtsXacM",
  "key30": "fW1GxjS5XHXpZrZQubTQ7QksVfxdYbiSDE96NHqe4t3vW21rosiLJK75ExEcg6D6z4NNwXwA4QWZ6xfsrG2mpet",
  "key31": "43WeLDPNudfSbVxZb2Qug9KyJ9qY2GyPE5Dq5F8KQhzThKJNZ3M3AGD9HFTn34XEcbMsJA4ELFi3DX24xiKEiVwR",
  "key32": "29DU1MSUbviXPNzZoewbi4BLpPmpPtm6DjPNNN3e4QJGSqCmVaEwzirE6ybnUAybBZ9DqvEFRcrXhq59ay2FbAVH",
  "key33": "5G3pT54gvEcjWbj2gjQp2TvhhqP5FXRzhhGLE7r3L2kSvZJzUoVXHiLdAKAhb9E2HLb65ahBouDmvvGu8e9rz36Y",
  "key34": "2h6KUgdpLcBF6AfSzA5ndCggcjmLwUDqEK4VUq4Wfc9rU1Evb3id114FZh7B6iDiybXwWLRNLAdWyqLDpHHxmP5x",
  "key35": "4ujXw1sNvrtQ2qTGaSDpJsmw9S9U5HtSP1jcrMMvFzPD1JcSy2Vw12w76e8i593Kc2gN8PkRJEggZKsFisRqDhL5",
  "key36": "5G3QacuiYpTN49uVoXoXp7vhDTK1PUeZdjeXGqsmX6Z7MypK1EK7xQRTnGAvHkJGtvwMKM1B271J3Ywq21X96Ysp",
  "key37": "5y65jNoWYHtMF1tPuMTa4nwxqcewTP9Tjy9D8ZyFLY8M3vvifvSGZuDaxo6yo3F6vgTKNttogXGN5oje4e9mgGTq",
  "key38": "4PBE6rqDjx6xCdHaPFTTZHpKa9msHCKoHYpRXMxL3SvrASvZkwYY2XJ3TGMnJX1ZYNLvCRwu2A49fvjXrngNonih"
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
