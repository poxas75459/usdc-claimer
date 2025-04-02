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
    "3tZfPSw89AZPxFX6YD6nCMmLfVwqGFfNq7wSG5oKJWa3LyH3cmUf5bkiRgyxxb4JeNwHPJBMgb7MENNYAoRygNaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1vSKkGbAjseKAsDrKam5jH39V8T3a8EbziZVAScMHrA2TukSFV4rjYzqh2njd11EyJA28xCfjaPELtxeg1jJbR",
  "key1": "4F6TkxXLgYsaMvJFM3b2pcikkKMEh2YEuCpqg53Nq2swvztHPUTGMxQdPEBJnpy1SFQgCG4xCELTxWYGU5ZDAiLm",
  "key2": "3iAmRDa3tRK1yKRtUibooouyX5h6CegvfTSgUksCoH89pxocTNwQxyxKTQoMdJfUukRNtXoctKBDTBNPvUh73saY",
  "key3": "5sbzAR5b5EtPimrnfgtuMrbnNrYj27ckx92RmCfpugPrLgpxTLTEdw6CKDbwuNSfyApCBSdtaeeEqx68dZnR6uRn",
  "key4": "Bynz3SpXeFYhi5aPPbWNQ4SWRE9VvX4jWQUiHtEfJnUtFUwV9VRMTD7zLG7Q8ytaspsTouSUjZddbbMwxVUrQqg",
  "key5": "5HoBBAamBd2Qc1n6RfJSV4xyC936sGxviPwjnoN3LREHX9QKxvP1aPkoyvDboUpoNBNMF9cv6ssx4WTTv6Kr5M3k",
  "key6": "gWqEjDcnDD5ak78HjEss9afthJEwGEdjtXRk4k6qvdyBVNo8mwAYb16GmfPXqPbFd87BJKfhaVGWqeCMstLgP6V",
  "key7": "3UidSobiQPkU8gMrG6WoetuVoDFwPFB3CcFTCpPDkGfjK49DFxAmikiU7rhJCFhAD199uEFkg3GrNBawQdcouLxP",
  "key8": "HeTez5HobHK1YrtbEQfpPeWgxDkX3Y28HgZtviiAnw5yZ4wwwDbXxWH9JhwcmHoWT8N1m8M13JBR7oEJdXDRMpH",
  "key9": "5tABA73fuzs4hP8kNopqHfS4Tth7LRYofc6J45unVt69sY3sdmB3XAn7AAuNCo7EN4P5DXrnSzRrm1PE9gaogJqk",
  "key10": "5Df7NyKxRQKmXY9r3yVzj7SNRBxqqcW1UPuTy1oXd2SVVNaWJ8ajPeRwRkZUmJJwPhd8qYN5jwzsuqGZPi1HXZE8",
  "key11": "3N4RuwKAehbdM5dAatHvkn1BzLqCfLR6FLrLjDYFJzYknM5TAqGkw6ieaB5pciBko5dj7YPQLYHraZP26fZoV3de",
  "key12": "ijzutMFQmBYDdnUD5Bdg1VFVadXebQPiEgm25w6jHdnzDdAjnQrrKqS4Gd55PaqH1ia7wgec9wcE7nfN2GJ6x2b",
  "key13": "4LFmpSpUqLwi7s3UwsRWhzxR75u3mesfan9HdN9aryrhgVr3KHxJ4n7qcEc8EnCh3ShizqPXen4XRB7WS5gcZeEw",
  "key14": "4CMGwoabhsyeEb2DCRmF886aVEhvdKSaT7xm1AQ2aAe3visbepR8sf11yuoUjYsu5TssZ4UoXB364EJqhL8u4CoV",
  "key15": "2SDpY1bpr6XbDgDAvFDttwJttVk1hRWbSLnXtUjmyHvrQRGWniMawSAJBup3ve1aTRprz8EuhmYXzvEZgUpKnKUG",
  "key16": "4F9JAc3CDFRW9M3rc2sVNeJy8yhFaSFtRZwifHvpj2zf3q8bnkH7J1zLsLwvA7VhTPzqon8sMR31VLAjjTDxuL55",
  "key17": "44UWEoeHJPo9zz3rqeDyDPRBCzGDp78zLiU7drjFMEjMstfHfHDsmY59Jeer23oESns3zXkheXWfygcJud2DZgf5",
  "key18": "3vo4DXBhVjfJeDUPG3dqhL2vCwEXh8v2s22LDxC3NYpprJJx35CSBMkzZgGMhqS4aTs8eX8RD4ccGGgGSzUxaqy",
  "key19": "ZK7erypHwnAtuktKq7Hq9EzEhHxLEmoBpsh89TymhpsqRnw9qjTq66NgPYdtuJ3iitKKmd6YJ199fWseBXVEPAo",
  "key20": "9yfwLCzgETRn3nkRT8WADhfomBKuy6ECYsnMPP2LkSHzXLhcXHa3vxqkLQiytcXKq7ZbP1RxVX7FcTexbEinchS",
  "key21": "4J3zVXSZfFwM2iDP27eVviT3v9Fusjw83JDQX4kWGfzWxXLjP7zGv8cBGGkbqDJ1zrQQpCozVtyTFQFZojcZpgjV",
  "key22": "5SsT9TNEhfM7BRRkZ7MWG9U3nbyd3eAjLHm72axQ6KoPZgpoxUbZRB6teYVq89Cp4tYR2SeH6v5NTA8Gh9MnQvQi",
  "key23": "5Lu71Po2D4FTw3mkgHJJRntHTjDuhvTiT662VTsGwa2GBcmEwrMGGoE32PdV4sXKoiXdE3nbQPL6mMBJS6frpa1v",
  "key24": "4bA6n8CL8rqJMTmQJB9b14Uzf1vV9tXHxgTzbKykoxBTe3CPRzeGkv4Rp139gHb5cktzViexXUcrmYN4awQ68u46",
  "key25": "32QdWCvLDqkqW1AxzMXzhPytkSQWfnVoiJdq4nktg3DQm9zWPPonWbHC5Yha5uPqKbhrpFDuPraaPZ5mJ9rzehyP",
  "key26": "vyeLigkoPbNaDgK88S71c8ZWbFXkiuZ5fPxuDYk6GhrF1xiRr6yYRd3ZykuHvagNCnehdMRG8avygGRac71jtd8",
  "key27": "39ppVh4sLfi9S2whDT2CECeqo2dqSDyw9oTXYURCioEdn7sXijD9rVqgEx8p5HKk7jPeDeuHsHisvnUVV4sXyAfs",
  "key28": "3MMZ7UvMgbQcrSjxgMhLQBtacEvTVhxLbFqVWK8prunnN9y4S6k4LAWTjGpWLQcpLTWNPu4J1q5tDVoJvZ44vR74",
  "key29": "4AKSgc14ibyNdvZevkcN4YhHdLcNnDTdewNYhuNsnKpoAYfccfmzkdY6rcshTB63aGpxfN2RVVGBc3co4T39FSiz",
  "key30": "5BU1o9SngMp1tH6D3bQFnrnwhbeY8t8RiaPDL7SXp8XnVyGceSbx4wNfCHMMGRWxkerPS7UeetVsQBsvfeuSBmwB",
  "key31": "5y1SE9mm5SriJoZNQoZU5vSYJS4YyKQrRbV2nr9bz6qptjnybLv3p3Coi3RaV9V2BCJktztzaKyCZhMuUnrCNKL",
  "key32": "5HoVGkof7NTKt3DSZvNGN9zWm59XWpbAkiMpqMTKtyNSZSn592Zbt99yhZus5v2qtxLBNKANssFQx5Xa3xZ7rybE",
  "key33": "5LPU3Zb2sxWx5DaSjF8dMHh8f1rvPawZgE4EdNqaz2vuuvxFm9AgsXvymAkXf2ZcFsdXnzis6AYtieCbJYDtorJi",
  "key34": "3jYquasTaUpJ8Me8YyNS29YXag1N7FVQBaoQZD2PMkuQn69P4YP756vP9eWXan9QSdikjYSUkgLL7uE6HqmTyXv5",
  "key35": "9PdgXittjzxU7ppCqXJKgJf653a95CnPzHQHd6Chek9b4docp357weWGfK19V5Uz7TTZ9oFskRLpsyRBH8X8zP3",
  "key36": "2ChUM2eJ4HcpHJ3TMPaFwmonAaVVEqAL9xv9MBPdBsbxfGYr3vRmcWY12PJWBfuQpuwfyNuBYWvo9kthev6pLYNE",
  "key37": "2u2SSJXuDVzNvPKraVwVYs5nZxpt2Yu36kZ6LGRspqMXVpRGpdyT7wBNrBGcj2urhXtALd3bShUqm58XUzy1CSQ4",
  "key38": "5DFK6ss2Tt8z32wyF4BJT5cfnZSyqrh5F8BLWDayx7e44mPr7dWtSR3BKvZRXnBU1tuVHagVxt6Vux1RpVJbuYm4"
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
