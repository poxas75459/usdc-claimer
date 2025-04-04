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
    "3N6kK1neFtqNEoh6QxGLsKe5xD1JpFCK32tDZRq7ChgRfZuUFUpQPYcZGAFCWmKgtCeewt75oAztLsAG6nZoSi3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEfu26qjWe4gxADmHDsUgLPSRVahu4oVyuPFQuaShGEycKs9vv3JZn4afspwP3CHQnVq2r3C6nc3UMEHcuwFZhD",
  "key1": "3fT1SFxUuTVhFfcBXRo41YxgyJGw44nRKQTkU43chHmng4gZt7hjWd7WoZHML8SAb2eBSaiWLdiLMW9Qjvr4MEcL",
  "key2": "28T7EBZu7wLEmVe2ruyCLEWG2CQ7XyZAZfjLBwyvfUdyaFhAUjziyQkgLs1RjXbEzTxtgefLrGAgWSwMDpkzTwWL",
  "key3": "SC3KrVoawg8nmAZepPt99DnAW8NkRHZvgn9VhpGjd3bEWiL8FVRyE6nQxJhEnGJaah5LEGPxkFykZLucSWAXDiJ",
  "key4": "2kPLBfUkeG8r9UacHV9veG7KVB18fJLrTkMofySPJg8y7xvS3qN5XkGgrEZejnBbRUHxRzchFBccB5L1vsD7Wdov",
  "key5": "4rrZoZEdryu9m41wnMLpHX9tvjRa1EaAxZ724JhBmU4X1SHT7YArrLSpXVz65Mitck9HZiu6XxcUK7p2xjAgVTst",
  "key6": "4TG7VJfBBx5jki5gYfv43GqaKGzgULSTMnNV4D3zTMRvDW9sau4SjdDtzHbU9PyxqiTjcF3fbvwdU1rGBfiPUUEr",
  "key7": "32v67d31VvWH4kEBAUnaoHrALh3pxZHRTGqbS4YUz6pikv8o6neTHtwEMobewcCPWCjyxMBN3kFSUFht3i2iHGEE",
  "key8": "2mz7cCZ2MHV4utB4rbEN2ddswixaetSMi6xVF6vkXYkTckQopQLVxUwMLv1MAMvHuL5xv5MX3TWGst5xsRoRRYyU",
  "key9": "4AJGJTBNYoLUEhz76sZzfzojnQFFjcdoiSgbqqyDbcoBa5Lhefmz9a5q2TdZy3X5h2YDHii53xUGb5icoYdYuF76",
  "key10": "vyMSskJaESEE2thMAVtnhLSvBC8m9Xo6gMCMY8kFpud6fiQkA92oWoy9qX6z2rYEUcFKVkVeeJ6beRVtXDZPT8z",
  "key11": "4y7j5h6qZg8g8LEo1A4P6jdncP4AGkcgAyf2vymS2ru57B3QX1HTSdRxJUQZPubCirtQpFbi3HKhWqU8dQftwGMN",
  "key12": "5vYWTC36T2Ta4M31TN3gMBdXdNAdxPfpXzh6gbswpFAfx5ppAmn3mioWCeaeN3tWo78NbWbx1wa7Ntp12W9HMHRa",
  "key13": "sErqpm9vrxvDWDXpkZcCSBRwbYVdX2wyGaZ6AM4hrKcu1EBXPL7VWTjiLsVcWcrAWPd8F6iym63WEtkHUeTeERt",
  "key14": "4iqEzxFCdFUyzLMepUd2Vx5Wpa3q2PS6CqmYjB9aSt2aUvHRPZPB6XzjDBRjg6g1JPygio9H5fX6Ru82ijcnfvmo",
  "key15": "5CuWVee516jhKNvkaRg2821BxiqkVvQxEyubAffKPyGa6QacdUj5MciUuCFCmpkqNAQmdfu2HLTkZV4duCFgG7sx",
  "key16": "d1kqa5t3TSbheC71QSWKwANtii5EqCroE3oR4g83SfivopAwMUKRPbL8fmMMV1ot9d3HzKYBXC6aV15ExXkrKa4",
  "key17": "5taJSJ7sTdB6UKQ3dYP4As4fyeDYCG7AqN3UKqP1oZ3kFa19LNjJ8i7kEWBY4vEkciHTfNP3Ti4FoEsDkBJ4w6ve",
  "key18": "3R2CYbpvR68XNwLirCYEZoDtDkbymffqLSm7wPpM6qArf8qyyKRc52jbY9TxCSss5bQA8ombA7ojfzs5ubCc8MQL",
  "key19": "4Rr7PYqtBaWk46Kte4VZNjQ6SDR4gkAGzThg5oQtj73ohtGkKeqwzDunA6Sti5n2RiTQBPYnfitEq1RHLT18mUVY",
  "key20": "5xod6p2f999CA2WytyARkiu6A9b18SGkXhbuC12GeenbPh1QkmuXayAmcBjszhxG8j35MeXrE7QJunrSg7RABVpg",
  "key21": "3Ke86p2jTsGyiLGkiZZzu4b3VcxHddFTCrBM7p7W4BjdBtGhTDDASFF8hczxJViGkG356HqRAnLQZaPZ5YD3QKZp",
  "key22": "4xVFSGAooM1o6bZPNdYQeaCqgU9WfYU6doZss5pNzaMXiQAsgHatoD3kNVp1Ekvko9cYRHgbg4mRFqRrELxSeAFW",
  "key23": "2GDXQSA4Ch9aeionubLqpzseCkpD9gkx7m66doMhS5KhcA6FMDJ7xhXQY2ztYP6Gf5kwiqznfwdc3sDmKrqeVg2b",
  "key24": "4w3SQ4WirihrQ5vHMn72tEqzy1x1XdwPg8n1wQnf9ijrbwFe9GEfjy9tXAivhPYNM8J9gomquwsAc468eCLX3Pkv",
  "key25": "2x3Ua3CX7g5xXhwoh3jLmf4jUAMVymx8YQH9xrN74bcigg9iVQ6RRHGJMdWkph3czrqSBtZYa92HcQmeWqmHKkE1",
  "key26": "2ZjFYyC5EiK45TFPV1SZvhtLdiKHqsENPeP8V1Haq5xTZT1WMLWrdgyoUBVpNxjaqszUCwXk4LREB7VUf2a5rRCN",
  "key27": "3NBLWx9Se8uduxmUKzC6NEQR25eg1vkL5HuiuWvR8P8DbDkUCweJSocDDwK1akU8y1p68Drn1T9kpT7ufBVRHBE6",
  "key28": "SUXhc89VRWbgJm5sEkE9P8RJc7GGFohq2bAo2Y8z2aAQY6uXyja3ReVhWadpXhPfkiftsSsgqRRfYUciRD79q7v",
  "key29": "3wNZqsoE45B7yh2qYTrzSzGM949eBoHgAsGaD8ek5GMPSr6J4XPkFU49h43rF4FhZDFFwvb2dAa2XSGwU642u5aE",
  "key30": "oT54uDo3Pnfo3LD7N5TT8i7nYxzYG8edjEwtJimbGRboeh87HseMALqrYDi3wCBhrEUQd4bYbDeY3HvrTZZuaUE",
  "key31": "RxZ33wheJjstnM3MoKKhDJ4mDC2FEqu1hKeNyj8etzAUE9obo3e6yPoqCxZaeREVSMfDT5g67t6suokWLue24fp",
  "key32": "4psmkWsy2zipoYMhM512CzPcEWK1AXvp1a9k9mnxqkLETP1WvGVrDZ1UEr2VtUhi26phkeL8RHkxQwwrVNHugofR",
  "key33": "4iXUcXbSoUtYYBXbLBu18ksHcJ4XqQx2coh2EHLd8spYRv2Frt8LEVx5vGS9FzrtLJK8s6b1rs3H8u2eWQ4kzDky",
  "key34": "5xt8NvMZMntYgXb5p2tu1RV4eRvZ1KCY8vGLY95pSssGqjnqHv6gmdzRCekoUkD2jp9t3w2wh1e7ok9GEkEpv4Hp",
  "key35": "zo1CU7n7YrmRLtcvjqvYKkWFCv1L6BY3VLWfgdDUEX8QD65RHbrfeYz8c1FhPsfQsre8KtUGdAaUpHdTwU2RExr",
  "key36": "4pQk8eEXPthsQPVwMgHRCQo9dJ6MUJ8etv2a3fZKmvfUpzev5fYmERtPKJWMVpfB2j4o3LW4PKhye5BeJxCouWP6",
  "key37": "5wEP9ZnNWb7ZkxL45HujhwgsRd3FmVNjHNthGiEXo4u7Jq4kCj5opfXbiciuahaAxMwa9ycZkaftuZAtJmwNWLrY",
  "key38": "aUN6dnJgG9e8BMkv3LsZawMysrnx5VgVS3JUsQzbXRoSw3gzi5jXfxuspcrig3KqbVbHcQKT54zqNgmi5JpacAj"
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
