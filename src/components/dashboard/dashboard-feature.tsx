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
    "xRSuTc47bk5A2ZV1U1oF77m5aQ9wYSMjNhrGzcGuvTPr5mUBcNFqNkJvDfgMnbQcyJwxQehgYUCc7hH2cgBXA3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27P2yntpg1kXbww6kkmkQ8MBNNdzk3wkmRccLgLuFihV1ViUWt99dQgXrsyrXTTdJSJoNXeEZi1py54Ku6aGid8k",
  "key1": "1oPgdb6L18UGH6QLQ5QgPDJboaDwfNCdfNzhVtxRHtKTiPMopDrYnBZgJSb3Z68ZocwzaZJy4SAYddopJQSKF9D",
  "key2": "2nSbx7yctKELMrZK2ypeoqeDei7a1xMMF2Rd4eepthsBUTdSEMZ1wiDgctQdPy2S2WuhTGV2D1qK1744XgfyB8rr",
  "key3": "42HXVXnxKD39ZbnDU1uUpmdu4jHuRQuNtf1SS8qdyU72rg7DtPt9FEsxnYfTwLcvdMhHjnKVf29WWLWNwvgZvP24",
  "key4": "2CSz7KuUKhrEUV372NfDE4To45QmZMeTMWDmjgwcUYKeUCUwRxA6wLqN9ZdQx9iKyCKQzBj3Pp3KLtbK2V8ZhZQd",
  "key5": "5TGA5zX4XXjndc4EUUnEAfTfxpwoBfaEs5joprEn936HGE7rF1Ay3R6EhJDChUuwTgJ3RYjiVUDRjLsgQhH3qmMn",
  "key6": "2p2bVLZuQn5TFPTvEBweosPEccnwYDcH26TGHuPnaBRXdSf6vQeHVTUTMtdCMkbzsgzD9wWo1JaY8PNFc6sfJqZL",
  "key7": "57zmFgZKfoddL9djwx26HcEFCw6ieqyzYL9exai7nxcwqDm3nqHbRzVVPK4yGV9Ve1cAc1tvByc46h978cRPr8uG",
  "key8": "4wZ8yMxmqjgRqDcBZ9FnYgnQqWAKSbc562vxzHSSrnUrojxRYmd9yTZWSmpr5qRVq8qDEDzshH3Pk14Z3CG51H8n",
  "key9": "2m55GUhbBRhopLPZfgpJME98m5zueNxV5JzjZJgkEqGxajUSznQPkZyEx9DcDebMR8MxBh4CTMuxvRtSnD7pzmwt",
  "key10": "2Tg1nPQoe2ALik9zKEf44ZTKjmkFyKfvmS7oe9QNm8731ev2jcAPxm6XbzcMLVMJRemoD3wzxoWfXfZFUnFdKsRc",
  "key11": "4kyX2y91jgLmVHcf2grTHrA7xrZFLEB59uJX3s8VirZ8JPu7scNP6CXpcQeRveyaTLFyaCZ4pvoE5MREr7BD5JyM",
  "key12": "MGkdJ4CGnuRthGsGaaen5j2Cx1mVNF4oMAHJtK8yKuVXK2GEz4vds9kErMfD87d3Gt4scoZ4J65C2fCtsAYBLxC",
  "key13": "4NDZxKQcutv8jj1K6GvhoNjxeXkdYzRuUQiCTSsX3wUdvMD1PxKZB2icq4nt8qRoYxs83f8gsRCnjcfpJRpnkYHr",
  "key14": "4zoFgkyo9pLwhbuTZQJiBPrYDnFF3Wy4qDDxC3raLqYyTx5J2qcsauddWQqio7gN2WgL5kEzy84U8qoUCmeb8ErX",
  "key15": "2Xy1PDF9AkTitPk4r46KVWA9TAGfhnaBpnRbGB9HQ4Lcc9CMdBAcJdjdtsjFVWuDWuubeSTfEJDX4WvkqN85Kg6D",
  "key16": "2DhdosfsmVQW45npUuVgt4Br3dq37yEK6kJUbNmMDRT3uzAvxcbSx2KkkThEzZ3Q3DTM1rBNGxAKHwSMFbUFYBE",
  "key17": "3nTWzBpHkxHhgJUgZmYHyTfC73Kd5Keocp2qLd7UdJdgs71QD4GaZJrvEGDkYXJ6KNP3WMyUyCwHWREed8W7xx1Q",
  "key18": "5KdsNTAtA4YJCVAoTmWdtwoPgiXH4gGry2NKa2B1MxaKb1EoVPXoCA4Vevni7XY5mJJrfy4cCjX8YRYbSFBu6rsk",
  "key19": "5QfLMirXKWHr2xc8U2nvR55H6kgcQUXM4PJiycKgDpXjLhJpkax5AWTznfHLdpYuiu4LWN8XT2e9TTimc9aiq6KV",
  "key20": "2Kn1eVRUyUXWtEECiSnXybkVKpGtxqf26EVz5JJSpdZVc4HBX96aqsi75zyZK8RWqSjjCMmYJhcwwu139GpFBUYF",
  "key21": "3nVk8catDuYUGvBG2MohArzbbubJRyD5ewrrL41uFU6NWMn6wsfYK9QonJiVE6HPKZzQf4Znwpc688wGdSGJmjn4",
  "key22": "5oRY6URsj6zrjr8wqNJfWDLpX22WVdbjM2zhWHVBpr3MbF5fcAUWVv5UgbKJWY3FZo13XYQJrGiF7ifdvg9SDiGn",
  "key23": "2Gh4Y2NTAadruFF8RHhqEt4gsP1vRL9MMZoJPcra3Ra57XtAb5fteEBcCJ6yBnbg4k1nhJtFnSjyYcEyvyCnfdhF",
  "key24": "5KEL9J3kCMMLgo85fC5VkVkY5Bypp56EsJnkYXBtVZu2LCWbzVU6uvfcfNXMaDdeyUPsaGgjeLGMBTaT7mLYQtnS",
  "key25": "2wCvvuiQ14Q79btj5HLpE26qHjJBgY5hv5a64ThU6hiab99fMB6ZA765RJ4nYxvAicDU9TaauTbWFQsfiVwGjJS7",
  "key26": "2CcbS8sm4vDsQu1i6G7i7dkDshJdXsUvtzBw3kqBuN3CCikvSfgaqTT6jk5bh6jrxKevDvuoSjSQCAsGFkR9s866",
  "key27": "2pVoUcZBR9XedhvL4ghsQroHEyccHAmcRhBmbuZf7wdqXmASUdD9ss7D9GL1PuFP5Sv83rKZJx9dXBCsmqbFSCn9",
  "key28": "5fvShsk3YMjkPa7zh5Zd5e14ozdFbmWChNico9YvSiiSMcAAFG1yHpjM2LkZq7NwS8ZjvdUeGEymmFcBygbk24Y1",
  "key29": "5U3iEuCcGi5wpaRkPu8c3sfSY1AjJiKow5QvSqxNLBuMAk89GomNK9B7BnP9SGMHLc69e5BWzFPdNkeX4KiHyFZP",
  "key30": "4B8Rs2PRBiRCnaniL9mN5yfEjUo6gUHLB8jvLfoQ4wunQhbHeZF6BCSaz3SA9ALFZHDjrxM5ahU3gW1QbRGTE5Ey",
  "key31": "2Pguy74RXRKEamzkWSPKB3wNyKhFpfM3GZVVDLcYeY8ydCH1YEkojnubn9xAPSLxtnK8uiLucfrE5F8jXGQVJovh",
  "key32": "4dwS5D5aaA1d5Px3ko72oMoNiXToeqTPLjNLbqxwbU6wsUVr7dV5VycSf7pfX9sufYXPvKQfKB39o9qBq6Xyh8vc",
  "key33": "4bV534MtZgL7AhhDXtT7hg5JcytGfQ7TaFJzX8hbqfWcoG82gJAJve7CZ7P85tnSy3tgZhh8DuNj1eAYvfkjszdx",
  "key34": "zDdEhbwW6PrWk45R6bApt9xETWbFa8CnM8krRpaKWECZbMJLhbhzCEjg6rqLaLsqf5iDXLx4AWqnkWKR8Sy4KHR",
  "key35": "3nXxkWDgMKphL7mjJpps4ns3KNhsUrZi2964rKCVAJkW6zdwHcuiwV6KoVpHCgoxqGFoQFa2bGvywWGaMFHukGN1"
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
