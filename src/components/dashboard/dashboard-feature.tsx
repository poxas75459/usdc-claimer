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
    "xJtBGuSZe9vjP1bPeLZ1TXsvK36WyH3BHNZgwmv4TBmHLnfQybRQ339YV11eDdwUFDAVqBosaQiKEkHEQR8yMFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYaHtnx3Q6FMMFo8euZnVSfaxkvz3LjwxeY9toSfhkSZXRoSQLZ1quEFUmFmtiGZJACrmmNBb5dK2Z41kwvyLuH",
  "key1": "5RecFS6cKiZTYoUWNDYESd5xSkuGiawPHe2pjEkq6jdwVSCwuBd2C3xeczLgSdoUksRbU5LfMHBid5tfqnV9WCBh",
  "key2": "4a4MdYw1qKA5TcmKYTYXCpBXhViw1bj6MRKQH7ubTzcZN6XV95yUr5fDHotR9VVYd5sk9ofidEwA5nUBggNqXFWi",
  "key3": "3cRH1DdQLQR7cKUiCDGkeRN6P29prEmJ8ih4FMWkFuyx3XorWN4v2Hurm1cipPz6HgJAPDrba4GHzEuMsPNtYG2Q",
  "key4": "cCdVvJk7uADbGnnS5KiyF5RvnpBc6WGwzU1DwqULpWVMKbt4y1bSpL4kfi9yULZga3fcYSRGSkcgSazzH21Fuik",
  "key5": "3TWRdsAoN4WrxtQh6f1PoKY47iPJjxU8TtDosyPHv85iY4Rk832mgcEetusngW4mi6FBMhCEDtiRGqXNPaEpjyGa",
  "key6": "2iDnLAxcCGkRhZ6CGirS5KYgn4KMm7dkxZfc7rU6HXkZriSzCedqnN6sNgZMhi6rFkhy9MFKjqRZZahCAwnPRwSB",
  "key7": "3fuezsLjNnREw6th63tJHQC9BrN34uH4dqtss1RTvyse6ypC8vB2WkUsbiYWQGNNvxQmtzqAwx4rVkcCujFPZgJn",
  "key8": "4ekjeLkUUunJToFYGCM6tYgaQhm54vCxKa31YZ6mfLbgxx8u8fqbRDxXvNMc1v2wVsBo2pVd48XwaTsDMyzNhM97",
  "key9": "5P9KfR8papMRdwF621WmL5zHuPLyGnE5FzGsR1pymoJi2LRjKs6e1tFQaZE6NDwapfwUZwy38RGidGc4zvYYK5Rg",
  "key10": "5gfU9SjkDcA3Jxb4nqkRrrqDeHggsh7bah8HreGHeVuLFJZqVZttgECoDTB4v2Cn9ViPCc12DSQNQRBiGzjXc5kg",
  "key11": "2x8ypmJHa6UfyGuGRPYLA9sQZmr1LYbdtDUbXZq6XG63tRvKkmjwpjy6CY1mwSbaWK3JuenXHdx5qwgwtC96BDnu",
  "key12": "DV5gPrZSPZ9csntzoabemFNy9u8exXkWrE3ww3Znfkxd1gzMPRaxwqVS46TDhEBmMtwMnRgewG2C3EyE4eGqe8V",
  "key13": "FiHZH8GLUFvSUdu3YU7urC8YUNotCJQbh4Lz741gCGKrq93sFrB1QziaTr72ynt9jaEbyH7DVtMjgoqxFEJ6ZZf",
  "key14": "wF5S1jMBJQPkxiUYKMJ759uV2BZgCjCtUsLnZEoahoAiPHrJp3wibiVKaHSyJHXzPCHVn1M8kJ7aNk11xdxZrzU",
  "key15": "5NXHhJps8n3jiAsENTYrg6g9yNKNs7558mcFx52hdqw8DyBTTSbCUYRwXVGn4kVm7k6qD8cfkjfu5kxzZYB4r7y2",
  "key16": "4Y6eRhRctNwPFZi6Dj32hoYWXieHVRzCM3Jui5wr61krsN5HYRHoiiMzN2GLvxnEpvTZ1pD9BXwC7aycUCnWsKWx",
  "key17": "46nQ6jqP1M3WFUmECcYKwLUnz1oa1VMJFtKRfXXfBgqoPJ4JvJkpczrR1mDGEpd3hAuEvAAXcYHZnBBURTZcSkes",
  "key18": "5a2A827q1yf2rUd25XUXAMLPGiru2QgH7g9axSEbsopT5mNAXt2dHabEruSBm65rf1DwsYsyWqbL7XeDiwdXVyYd",
  "key19": "5dDHVGeeU1fc6Mb1kxabrVe7T76gQbR8Lt9CySTLtAkJBsbK4gneG6MyhVjAraitEWVtDuzrFcvFjKnDEZVWC4tm",
  "key20": "5vFCSRgjsUnGsDqDS1WCcfXvmyuSmH883K1QT7NW11T7iQBTv1fz6zKB94kczN36JPmK2kpTGT4Cd55wtzehXbN",
  "key21": "3XavNKRw4pAwnpJBgEnTwPbCgsCR8Qc7oeuYidvCbiQ2DJe7GY1VdBVpUkDcb2kSRmpUfnnNrKnoDsCYACe19WWi",
  "key22": "43Lxr7YRAHafCv4BDaZ7nBPUN85Au6DXBF41zjc4EoE4Jd7tNKykuHKvdQzLa7DjYMEduA1CptmLHSCvw1Dq1qhM",
  "key23": "5tJH5pC1Yi4iT4LGkaoWBWWfTVgtUUYMVwLcTughuqLuqe8VhCp7S6mXWgD1jKgrHfvTgtviECYDiYdPcUXBnTiN",
  "key24": "KQd3q8AUZxdnHc461paQr57AUotGJdG44TmFwQWSJFnbeEqbxqpwy4tPTyYbNKoM4CmE12mMx97HTyhJ1BDiwr9",
  "key25": "2w6sMwxPXMwejko4qc65wSagdPu4KYi8UvCaHXCjYV1NskKcYNQFzJ8WQ3iGNCS2MHkn92fFpVxtxEN7WgzMCy1P",
  "key26": "4Dw81Gu1N6o8njfjvqtjTRJj6rrjz4rYvHKgWcRtptiKdUV2aLFesbJzY617zztSfEepfSJ4ghC7fN5m6VMSh9cp",
  "key27": "5fQqK5UCt9dDAW7EHaZ4epCsghwpTso7eGfDZ7FQY3MJCLrHD2UUvKQKFgEdZdGm14zfKgHjpnuzSMqkCae5UJws",
  "key28": "53cKd8QFD9MLheoCfaz4DUwrrkB96WNApJHBYpTdLwpLaDDZiqpwThBSbEJ5Vqyv9maBLHifKhTAFfXbCn4ESHJD",
  "key29": "5iLQawmV2GVQV65x7XZzaYyGXjFqvXchCcFuBQYXLkyPfUU1KU1iaTYCYpqAevrxsSnPxXorsNqCnhmvdPFz1neH",
  "key30": "3mhQ8hPGPYFAwAgyJQsWgtJvfNT6ApippvL93GSvT6pxCaHqjyBY2zpM41UamhnyuePwveRxNHshWxepsTDKns9x",
  "key31": "5vdfTFiVXNNwwEQQafF5aT8HDKE1N1kEsa4tZxcjHhLTbu7e3FNFzGZsSLN7KCvNpjrutBWWTkQPjMu6Lfpy64s3",
  "key32": "64tEuQF6QEsxeHxkZaTYiTcsby258JWcWqBAbA4bK6PZRXgjeo8ELKumTeVhq9Wai9ACi98wntCSDxNbLYWfDGn1",
  "key33": "3EHzPQdLWZKKmvD6To47TkBC6FbdXEJvxNKH4bzMdCwGoWm598Tt65KB67E9iWQGwmsZDfUrLMcPpdKAWHwfAig8",
  "key34": "2M3EJYTNm92kgKaQLRSFsD9KYqCzTYHbDfdz6ZQZ9kqWtzB41AyZYXZDiVGWnK5EzE4J5jxiVdqqLpAURRnXDTjV",
  "key35": "5Lfqw5weCQaSoJiwb5kB2J1NWMEe5A6Pjdiz6RS1gkcn8Kve7Hdr1VswxXFHXuxTT8GTWsU7ic9H6DTwtNikCcp3",
  "key36": "9wJbVmQE2BdgbZyz53FLHR6HPZBmEHtsR2ocSBc35EzvU8USMZ58EHYePiCM58C1W59fVN4upje8w6jxsxdAnar",
  "key37": "5RPHTuThoDQ8RA2zKuAjoCsWsrv7kpg5uovDPVQr6dYsoZe8rq1HzVZ7rsjRYeqLJLUxX6nUrR73hhQYfJUKQnyu",
  "key38": "3kiQFXatbn2BACbZVudXqV8LqT2bcHNpRuF12Tm6rQnitjfD2o4UJqnGVNyhiZgwJWEtL9isV9JHPiftYSAxFqFk",
  "key39": "62usmJN21gckb2PKtqhaQ6fFqyJBLx2PJcugSPiK3QPYsfbQwf9v1Tu2Zhgr2AVMtRA8qqYviFjeCzjN5mW3ykT3",
  "key40": "3oBts1Nwqi8o6qE4LJu4CPbhN6YrUMvEMqaN4MhQGt1PQrab2GQBE9MmijA8mY4JY5MK3iGvhzEMiTBfUJT4Bw4M",
  "key41": "4wF8sdkUdA6y944ToBQnuLDXVTYfdMH2kA7xRcBvz44prAtPjNxvVLBc2woTveahckyrGfnNRLXd9PskZ3Gznx41",
  "key42": "LcZYkqcapUMe8KcNboaHopgzwzki5zjmfFCpQ1rwLgzfQamKD12z4QdKpeBsDFFHVJHHvx45zMiqYpn19hLRT2u",
  "key43": "4qHDFLuDxjZDeh77XMo2W8vnwjG3FuxwD2itrAWNwisMVGKH92G41LP1zQGHMuHggdkd4fDRZDFPzyVLHqQwJMad",
  "key44": "3FbRiRXSJn9NRxCdPPog8MxXNY9S7eAxQyrorkAsrRdc9UiNjQrrp76ZmRVzNgWThmPp9uBgkCwzH2Yx8LMzZrth",
  "key45": "2gXMKnVf9AYLEpZNFmL7EVqKCG8Upwrh64Hg53D5ZvssFRvwAg86ZevYgFGw5YiXqPs4PvHrsNXM61GwfSzk2tvX",
  "key46": "PEWNjNTnL5Ln9DLNbx5mS61SdSMgyd7ynwWWU3jhLysuqAZMLLmno4ZQHGTvsANJbw5atGLvHKdKrZ9sYog9HSU"
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
