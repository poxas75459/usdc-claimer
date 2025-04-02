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
    "3gD523GZsJjTpEkgz29REFGQA9Z9rNZUvBF8sbc31Mq7dvnRcHy3rXm5zkpdvVaVZUbjUAVxP9YgiyvqY1H6yyP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJjwEk2Xcw7T9G2GPT3yoLhADh6VmPy4AAA631pyC9GfsWYKvwVZQzUcv7zasfijeomzZ6nwUR1VYJ3ttKw9iKj",
  "key1": "3ybLVcB5YLD5T7vb1ok9FnbMDwLe89q7D4EZddNLqY3mL4fB7QSDmtBofgzDwQWHs5984DPHxquvrE5gwi7zFBjf",
  "key2": "2WczEbKXmT71nhrtWj6ZKTEtfmu8RVeXi8TbeuUdfrz5YtBCqtPJMKB6HWKKjDcYhZ9QwynD3qgVt8UAhVYRknub",
  "key3": "kKWsweKY6otBDU7RWALnht69kcMfhHNAT6bAFzQZhyEfotGFPBW7M3VBWPSAcGzHtUrd2J2Sj7f5MExcP5b6sDS",
  "key4": "Vs29vBy7AKBmEq4qftdcfaMkXu2xzQdLg4o3C1i9Lfb6LRa4o31NSmasfAT5ocRUAHmTDRdt6urVwipG8FnhqkA",
  "key5": "4ZAev3wciefbTeRSTDbzCvaz1NouGUHh8k94B1GPoNEG9CXTnvzrP86hrtt8MTogoRbKT8G4HetmpzMX3cAvv11R",
  "key6": "2GmpzBTssQBuVosAx9pouanBYk386C2T2Cn8oed2kLHr2CC6vE2w1tREhxRkqED5gwm5YizqF9o7A9xZCHyZMx31",
  "key7": "25daGHZXxbvnump8rRvZeZJ1CTqaXxH9LK5rpsPE8rDkZFHup9S5BJdCQwnWTExh9isx96FWh6AyB6Fb5a1TiHii",
  "key8": "23be72GHUATHUpzipQthpx59ToSaL2vh4x1eHVYyUpH5ci7wW4h8sdabRvmmrGaiaHM8F4EqDS13VNeCFUoNHDzX",
  "key9": "3QVCQFm9XioBEbScBv1y5Vn8LjJGB7zdXayGCDs2DKBPHx28VC1ffdNNSNnBHaR7jvo4Fx71AZEqAKZ8xqAZjUM4",
  "key10": "3HJsU3GqAwSaiKdBpR5x946G122TmRaN8CzTY519JQ1NqWEhTZ7Jz5wYKB55dnHGsTaaHXPg2KeiR3uM8rYkjsmW",
  "key11": "5iDiiZG8vM1Xbv1dZzqihTdN9PappWH6VB7pyWf1vzSC54CzCaiPBLhP8Zy3Bc6y1x2Ba3K8qEHJdmNC3Y5ejn43",
  "key12": "653WeEeQWb3sXn1hDFxw9HCPq1CZ26Jfa1HYCPgXgYDwCd3x87PLB5GjpUzLbRpkFqmehGc75JoS4hyamCGNZPXM",
  "key13": "5XSWxCME5jNQWuXVnNi9M7RY3pzNPWKWmNqt56uP3jhW2tXoZ5sHT4ZQhei6ZSEqSfrf9xAo2qHqNsd68ihvDDmt",
  "key14": "426WdkTDwkUknbwtiD3d1EqLFnRraaikVSViRqUYFpdupU4gqtsPkmiX2183MMFwrVckjqcoErYxKnUzX256Tm7H",
  "key15": "5MNQD3DQDXayWRCKWooyHYhvzAknLBRk9S17jGDvmLqmXgmnFfw6V2PjbVCmgwbXi5HSizp8ftKvDJwuSqNH3V3C",
  "key16": "2ZKph4XV4QGQV4hPecQiTrpiK8vXoo6L4zvodB1hi6uksog2V7mkg8DaFeN4gYeAS4PdGHsKivqyhpFNTSNAFyx7",
  "key17": "4MaMpmWfuHctSSAt5fKEPBr2Kp6Eer7xWLGumWTSy2JBVhKaE7pGzX8GubVBNQwp9bsbmjAd6zkZpSooAKz435GQ",
  "key18": "4AU2juVhwk4kd2vkB9GfJLyWk6A4nknimG1FuWbv9AMQH8LLw8fQzLzzRGoxZQvAPJ2kKTMzT81jTkKWfUffKNSn",
  "key19": "5VR6ov3vVDuTYXErD6n7M6wRYw8qzRdQuJrdsHchB48VUPSC3qkLG9hSEMuM5THNhAba8r8YnsD16o5iLWwuy7Fy",
  "key20": "39qNruZzuhJnJky1rD6MqbAVWozgsTpfv1onHnnFVm5Kdofx8w5uQ7UK44eJKHiKDqPYUAA1HC18b4Ut2FWRnxWc",
  "key21": "mBifdKsBnpKwPofXdtRCXF7Spqmdca6L5Yt9VwJSd5JAK7C4SHhytP8pud2jyGoizBbU5ZfXUVdmMeJiUrMdZvb",
  "key22": "3GwpMBBFCHFnF8RPRdjC3PSANLWb3YHVST4paoYZWK5eqN9x8JuDQCmFft2YThapGU7tDPL3NSxkSeQ1G6zbL1qp",
  "key23": "k2KkM17GJop1Z3ZuShGcFoxmyJuE6o1eopYnRUAFH1FnLYtQ8SbkAAVP6iVCj5MUMscpMmUuKjh1ZiWsTd9kVAJ",
  "key24": "3rY1971q3B9Pe7KtnRQf4VXQSxCM6youFZnpdJTpr4wRqnDwK9fHpaTsEcL9RzmVZwabb3oemdcS2RwSEE9Tkbny",
  "key25": "5grH8TzqvdKSQuFtiXvF4xdR6fHqy7TRibtCzHYooFKEk4oNKbHbbeMSBsM9uqNanwsXTQQE2c1cKQeoX3NxBcTt",
  "key26": "2An6FcDpxu51vqJkULRiGK6m6E4kFrmikj4a3TYKMMip76TjtMbiZ52ojW5EZJRa9km4KZVfwUx1kp5iiBMTtqb5",
  "key27": "aWq1kBVebYN1sCS2XrpneE53S3pzpYgfzdPtDUj5LdbLyhv3v5iC6dkyqYnso2qrCrFe2848hak39d92vXFpXAT",
  "key28": "4FEpzK9j1o446iPCZ2w4QFgo2FKhu6Re8W6pUMZZb6AE5uZR572yc1yVxU4EXgfV3DgXDnY2r6Hz4765AmqPszud",
  "key29": "4bUqAePVSHxgVASFbFX6gzRoUp4JSKW7Fe66ZC1koBHNCsEsb8MMC7CzdUe8Fi1pvhRbwHHxw1E9MFf6Hci4dRgD",
  "key30": "4KLiNazZwpWi9NEz61X2YCRj8HE9uH9wFDNzrgNiWDwgtW3bd36MouWVAWSqToPvdTDS2XiPY6ktQuh6pYYCupJB",
  "key31": "2FpgGdJi2vGZZdkfkSwjBdFD7MteZjgTSZPEXtcUMcJ1xr1qGBvdbPpX3VQAQqopr8PnPhMJ7yoBPFiyqPrZd9qa",
  "key32": "4irTKHY75SnaVhn22cYSKvXGpHE3dqSEKADGpoQWeG9yvrsrfbDTvbVqR9Dc7CDTbyWTSfrdBvNArnFt5fgkwYT2",
  "key33": "2d7GVXx4HuvHEUxdmrPeA2AzWgUTnQgBND4THYVEHqRied9bBaFwwnPg7Da7WF2tzsxEH4nKbQXkcf2NLJG5Yfyu",
  "key34": "4B7hNAFRtFTYRMohAJUXKSeHwD3ckcqbpXQdQZ2gXCRsfwPNXhmd6zoAEajj3ZmEGzUM9Lbn8Q5JXQWraHaHz7v4",
  "key35": "28eEu83UdM9LLMXTTR2JkJYyTdGsTpnFmurGCva7rSM8ueAhqLXKNbRi8cfM7r5DwpfTmKLKLpPxXsY5UtzSY1V9",
  "key36": "2VW9GSWyiyvU97XzHxtPu6zZrtz23nH9S1R2WMaaKG7fNzYPEjgaqwCPPvvV8ZdC9eiHY71VFx9TKuirw6efhgLv",
  "key37": "3eweFbsAq7gRVAMHdYAry7PwuWwZ5jQStmy4oydPRKxNM6uh16ADyE33S5ZV8ykYzkubRNdfdWpCxK5ubEndrPY8",
  "key38": "42Q5hm3FHQmHvkEw5tfDRCSfxqHeKwB2kHVxEaVCfFEpWJz6ysqws6unAuz8fMt3Lnf8sDtXRtb58FgxXxu5FVz5",
  "key39": "58LzKvo8Zdvu3A1kWSjhQs887K24mCWJy5R6Vyyik6PsD49HcTVphRLqgFiLRJSuYuxTsyGGMoCcdTaKpzQxDjc1",
  "key40": "92ZPc5B2B1Ufz8bCUrHXBZ1znSRzddGSQraGEHkWCMJRTysmcHNaHG8jLBBtmJSg9igsyWf7zpFHWkvZGsTtG9c",
  "key41": "3p6DxJ2mLA1UBFhP7NdEGi7oc47ShW2qwqdZQLHx4w5U1ZRiZL6KFzRn1jFhXaeEAQL1v3ozmGKLoTLvQdCiLphC",
  "key42": "59GQEPqnvAUpk6HoEswgWLaRcCHZckuaGiN5VXEkcPYLkxKLYZfgMsNuJ8CVtcnHWNVm9VyjiAwhR951ZcxYEGMb"
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
