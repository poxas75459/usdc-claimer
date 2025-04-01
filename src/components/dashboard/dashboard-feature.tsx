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
    "unkHTUYnptvXiWbcuVB653Rv382aVKHb9mfBo57G6yXNtha6owvkQR7fcuGwVSCJ1vkAT4wwkXHwR38dL27yB7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tTYmXTzhEDe86syhZx15gLFDA4CGq28f9pfsBCek8mzxvFCZbwzV2WNoNkxQwn3n13DxwXe1dVgbWeWVELEGZQw",
  "key1": "66oTzZp28rXBFR5q1f6ErUDwqHq8Yr582X9CVzKVhhHJ9yyR7YihMsFA1UZQDRmAirKr5PBN8oE1zHrojSPHLKGT",
  "key2": "2mXrxe3FnYpwTPmB9zChTyjL8ynnEKYX1Hsseb2J6PQmAvNft6PpNPyLomZttCXioVFJoFBQdAsGMJ8KKaBBERE1",
  "key3": "5TuPpqypMeAYNoZq2gTsGqAxe5Wqn9AvYDMBxduukVRHTHTKFRwpPFqyBibRCXASvpcF1SbwjCk8vDfSKzth2q7B",
  "key4": "mPLvwe7XutQZG5U3Nir6CbioJvs35sVugxxAt6RVZMApADXWoaqHgzTYkuwsvk6qtdNu6BAhYC5YYRgLJebPWof",
  "key5": "29AbjU3RpY47F8eY7TZtgyjP8JXszwypmzR9NGH6UjaGeF67FubHDZqZDRLtVVKobe1aBD5umjFQdUQPfGXRjd1P",
  "key6": "2xcsKLmYy4bBLjoFJCH8YAvwaz63eHjvbnoxNa8dEDgPJf2HW8Wat75HwbZ3YJaxKKyv7Ay85gv2xcqqFk13emkc",
  "key7": "AUWHPsdQAex9cMhQbYuZK7RdfR5oo7GXcc3pwJPQtnN9xUXrvBXY8T3YY3Y4n3pB1wi1qv2ZVrMzWUJekJXKuJQ",
  "key8": "4Zcxfe7dcjTPdRuxcpT3nw3CsV7e8o9hy7nsUqqJpTkoDw4d7rZVGrUMXSv21YKngFRGXsm5tu7shwCc63QpjLbY",
  "key9": "To7MLbj4vYU5KwKEMvdZy7P319WcBMtX15JX5j81vZpbzKC8An1X6KvzG2TLF39nEH6SjEkhgZVNuc5h8GmXJ6t",
  "key10": "61But6r24UDS9AtCd4m9dK78rGgpBkSAv6Mga3DBrLPLiVBPbTn52XwUDtMBABG2A6wFSPQaruD9KZXFuWKqVocV",
  "key11": "2rH7xRnsxZBuqwjayHDpt8eNJfdwCHjqyBLrqz1ywbPXX2mEfoBGshAVXUmZRqiBQJKs3uY8omAdvMP5SGzeb3LH",
  "key12": "3dTeCWY4XDv9ZphSVkFvnyCDWJ8f6hUQR3e2AN3KwkVndNJZc6D7oTAXMSfc79swCxk8e9x2mKLLDXj8Tprku63J",
  "key13": "5MXLPqg1qp9aZV6dcUoXP7kdPocKsmvxcuoV9KgNY2FYXCghmbdfV9PBvZNxLh7vaso3eamiJ73w63ELLNs3xTME",
  "key14": "3nt9yikKAejLiMpdPA2GQHud9qwzx6iH49uKSRcP2cen6HFcNPaxkizhQdsxW2sPyKhQuYJMMVgjwYqSW2SfVqGX",
  "key15": "3REr9YN1YBN8zrX1yS2EWZ35koJNdm4pbLrTiQFj3EFqzfrZaEBYQXkFqrMGzcS1LA4SvsJ5jMuyKhQD4A9R18Mv",
  "key16": "3QDkajnBvgZRQqLEcpF5ArrtZtK1T9eT8sGSbR6iZhkWhTgfdgeEshaj9CE5jzTvABrk7X3tCBTka5im8XNnFYtY",
  "key17": "DvmNDFAJzddQysbVuxEtCAGhVBNFTUCkAhQBhnqrRjiDb7oemcGQjEiXqPvxbxNnQwpwBSCf4RkqpApcvYGwqbT",
  "key18": "267UogQCDyCvrwhg7JfejDr5tAovNH6cn3gdzGjDQSfVeRuqLw1pobvTjrYCtCRCxgrR7iXoXUy5SCZ2DYG2nB3t",
  "key19": "5L1YYmHLnNLyUriU6CrWFNf2pjVo2N6aptCB8DiKXpHXL956Xw9b1swDXJES2Pe7fv6eN7A8J9KJLXkBfhtCBhju",
  "key20": "2WLM1mRSbirJpT3E4rqiBB2Ur3yRhCf9JVioHGMSWZscrjk8TB72KhsSCu3EVXTPRkPBZy7pHkvvgh1ouPvty386",
  "key21": "3cvsYTTmx27w2hxmg3FxEajea9M82jeo6dZi8TWEsZZ86G2xzvaEmEAHoZx1hFHbFpASGRUBQqdXfFgTz3qMo7mV",
  "key22": "5femv5x4kUMtZvUNqJZcsugKQVtdqFfT4VTr1Ksf9wZRhMD113bgETBfJLGVG868SJtrrPwp4EuzRNY7t6DYbGVZ",
  "key23": "3RMJWQq4gpMRmsc71p2AJ1pcCwqK39cqWDmLCuhhjyAmuaVeBFwu4zHEUaohz8vn147rqwBrpWQi2BMyWw4vYXGT",
  "key24": "4oQBizrhJjukAsDg4NiKy3vcGkn4ky26S8gESUYEonEiyajby23wJzBj4wGt5oGUYfF9wTRvmeeY1UhyChSqQhFA",
  "key25": "wFHCkvtPLtn8GvM2XMRmXFHzQeeMY9MepFSvXnftgwE2bDvGxx8hAShhiJwbCLxDpWs3W5fdqAA8vv8EKRnn9XM",
  "key26": "3Rn6puY9NmgpbFtYaJbX1t9UTnJwkeHrV4VfPHfXcPsqH6Dwqq3Mb5Dtj2yWuwPfDNc6cd84D5szN36b5FWoMyHX",
  "key27": "DXtU7P5NvezSMK4ASMYf3jER8xYRXzFUP8M4GAH6PRKgHBVNgSzsNBT6CZ19ybeE38WDftKvT5fkPW6ZxiJQTz9"
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
