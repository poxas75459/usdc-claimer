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
    "8E1TgtRRRpSyQF5237vWKJUXKrvySiKihyPe9Eez9u6cPahzTfFaAPGFbHSeW6ZMrhdqN2in5ZjxsogTSoHg9kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yu7s9aw51i7prhdAS2JXdz2YYsXXjbcVYyHaY8u8k2xZqFF9qAU4ZPz3foKiag9EqMKX3NDQR3iAwGmTuho4DbE",
  "key1": "2Tq4DhvoFMsYxcNtSggvzWZietAPgCbz5sMWXuosoQpVAhckG5veRWz14eYqYh5jfEDGswMKjradfnPuGRmNSg7N",
  "key2": "8kk9XJij3h7HyLjktP33epRh8HBG9VAc6ys5ygTWidvTxQkBUZkibUcyKzzSPWnZjRnNB6rL9HhSjqV2PWeB42M",
  "key3": "4uBT36kmhjhrw1NCoitXzzabr3SN6Qi6RpRzfvZgufpCTTVqjKMXMEMv7y7fezcJjFWL6L5grL8dzqWKBNCSfEdC",
  "key4": "41m8Qko6yrzWt5YVQ373ZYxbduJYB5s6gvQdsr9wWtohoCHwj6WPWtHbchYqzjuh7xc3nNRL7sWyMYXLkqRMskQm",
  "key5": "5nsdn1Xyr8ZGGGUqPdHKH9Uq3CFq299TQvPAffVUmRn4RfgKJhh74DCH362awisTUTtYFDhYzxA8B4ToxrT9x2Hx",
  "key6": "5QJY3MeHGaYPQZsWixDRnBLwFpgVWZyLQyGU5GrriaNPa4bDrKK3CgdsZnDWYqZubtwiA8HdS9bzK4NQreeUkVZ9",
  "key7": "4QervANvXftJF8RN8KbE7A8Tf3qBaFdRN8tqyr39U54fvyv6DkWn4hhDtqnC1ZjNLEGDczRwpvj3m2vGD9YRnsue",
  "key8": "3dNM47RPcrsSoEYS8U7RFMugor5SrwDivLZW4QfREPn1NMACkcLiVU9NFfaUFKNLagEErL971J61aeTeSHR697FZ",
  "key9": "XJ4PNiPDFXbJdeDCcHn3Sogijnj1TEabnfCDufWkWDFgmEJ6UG2WxTcKMGnLYCZLzjnURX7tWoP444kF8vNHTnN",
  "key10": "4QvBWFyFVigHhdnJpoSs9NJeaD4YrbusM8g7kb9Jg8odVYrYG8xa6ceFNCvWUWbxyoeWwEyc4TgcSLAHBXWVoDw7",
  "key11": "4Btb31ZmaMddYPAEXYR8LHs8E886uj1kaM2BVjT3Tyv7uA4TuhDWkDZ5fQLYsETHShdbQKWeEqFKgtbxoZ7sfsxm",
  "key12": "2PMW7kinq4qp3EtfrXdZbExBSfUb18wvDDMSFhtKWgimWKN4ELy3d8p1uJdNNyxcqAcbEPsSCBrVtkQpQrkY3CJ6",
  "key13": "5LUR7C9aq8qZDjMiZFjpDbAbKPJ68NvW87ysVxe6NBhSoREw6LaFe8DCPn5L63Mx2vKuynHFY3xhexz3oMpoZyNS",
  "key14": "4KvpKa14JsugdCfXc9tGnchFHYcahWwRWmXfcpQJZgDHonND2LM86DyD3wPH41Y1tJDN4jcxv5x3SgAVKUa1Skdk",
  "key15": "2E8MXBPfznfcte7d5Kir33JRKRyvamwmhiaD8wt8zJoWtxS2y5Wv9s5peRGribpg9WfCC6fGRbGKKbCga4PHzLpH",
  "key16": "3RQpTHgaUgMMR72brfrbXKBhKe9GrssYX2d4QHbY8GBEiqPiLWFap7vYJvwggcBpAWRGLWeYPod9GRdQtnxP395",
  "key17": "2P2ifepFwVSS5LUGb4Cun33uWUuB8j7FT97wPFiHsrkE9sUQZNDBQfmYu2bneSRfsq8r8D8LFXAg5HLUKZ14coMV",
  "key18": "4xaTVtSmUYuf5Hb5twBLaT21CjYRMeWv3xFdi338NEAJGobtATxHdHaepCADZXtvn3pxBiwZMsRm9JY7dDZ6bJUH",
  "key19": "2unvB8VZSRnpDTtYiaa2AZe5rNg9SjZAatLQ334vijLKVSMe8YrezY4eVoC4Z9bXrh4SjQwsitBuLRQJVKT8e8BF",
  "key20": "4bMjvHKCMe26uC48kYMbAM635vNhehuaJZNwkcdLFTTbhy85uVx4GsNMmGh5tUs4mX7DUiwqdEoF5FM6VobVyRDU",
  "key21": "3e4TPFiX9DZeDCgwwSu9vaAu6ZZkrPpWumKE3Tqf7CcSiXRbCvSKbZVMhe7yJusqdT7Mg5se7U1Pm6epSvnhiMFX",
  "key22": "3zTJJT8EM1vUwFWbNd348rJJbSfxC6fNWgdSJv3A9HP2BwvQaBQMfkrtZxVTWNnRPKvLjGjp1Zg2tg97Q5uHA9Y4",
  "key23": "31Z2TA8FFcAvi7PiXfhcuShypBHQ9VuPM1Y6s32nzFuTuHT7qkbC7WVg4JicDSi3uW8ydxkZBXq5Y5Nut1efG51Q",
  "key24": "YyLeo6vPZ3Pj8XJsJuuNX7EMAtyWBGMzKJ4pW3wWXwQEtz9M4hMxoyQXPHaepzJaS6BKguRMCftouA3m8svyumm",
  "key25": "4xEcqenMfwKkUSb9yV7eDGHJeP6XPJV65musxEVwhFi7BpdpmJYafVZ4rQRwaKkJmVd9zV9GpFbU4Vw5t9qxi1d5",
  "key26": "4gc1vA6YfXTTAMrJr7kgB9uJhmQXMBbQPwc73zXRBeMC7mg93gsAxLAY6G5BgmiBZnwcULKmgYmgrjrCx62XfAEM",
  "key27": "3hqhX7u7pPxC7Y7FxHuUR5WEgNVbUtvTsAX2RF4TNQkFWArmStmEsB3JubJwsXMhgHzLGReKGTki7DPmcGbjmCAc",
  "key28": "22mtzUaXW5ext8pt2V6NLTnuqd6kH1NAVj2nNk9Ufp8wKBdAPvq49LVy8p8VzPrGA3KgFANMiFpXf3djDTi9D8rT",
  "key29": "2dsXFtEP7SeXd1gCwHcaN8sTSKBTJbo6qP4Zv6FxtU6VTkPTbdQES8GtK2U4bJRhwDm1rgrPRNJMv3HNMYXwQZjv",
  "key30": "4DVnhRqiNYwjwEMFTN1rFX4ZCdRW5JW2ku6P8dzmwiKUGbPUckQsTSCC5p3Rb2crLvdHiArCVyoLAyYf5oqwYc5E",
  "key31": "56WJvf2LsLCVp6Daf9LZay1SC6bLLaYeCap6Gwq2qX8bp9CaeotNU2o6mKSGaMgrPjpFV9mE2F32FdESgxnPep6c"
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
