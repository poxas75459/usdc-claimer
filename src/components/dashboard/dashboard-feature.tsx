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
    "3RLuxyD99xVdE22hiKNND6bB7HLsRBk5Do4fMxBUg46shs8pa4RbjgfaTP22Ddvrth2QjrMJJX7xMGfH9coxkkH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DouaUAPhJNDuhAuXWKYRYKpfRshkQc7BBVAtSLgiaPqSEwsjBYnJGnPvoMxzwKc7BiHoKeJ5DzmovQHcsypUai",
  "key1": "43jsWMhBZtLZXu7yU5Z3pTCcHi9Czvzrc3nGwhbQA5zbEQnmEnU4DgSmTijEtoBQT2FpMmbD7ig5LtWocfr3wKyx",
  "key2": "56BkYgPfEmuReLZeKXkskGrnjWGSSmMJArCcY2iirae7Re89GWKCDWrXHN6j5smSv1zb5wP5JGQ9gHzhkqGCresS",
  "key3": "2SSNoJKHgWFxiThACYidFPBzbM1TK1MmxE7tWzcpcqWTdXV8JrbWjom78TkKQemt51t4VpisjZQYG8fUgUK2U684",
  "key4": "2MKrCM1AZACCaxDaYdDaS3S9iGRYSo7jVtmZNuQvJPWyCaTjoBCCguax7ZpMLn9tVNu5tqbaeEHE1egEXUxTpV3r",
  "key5": "3GyvgCJ9KS9ZnPMCfGi6G6SyQr7t3UtWwGzDZtaTpW2oCts6AdLYxHtbz78fotf5yE98MFFCT6AwCb6kFRq7zt4B",
  "key6": "4pMNHiWkur4KdiMb3Ft7TJAP2Hx2tqu5gKym1skL5wD75KDnm18rJXTNY6BvmX9rY4GWCNcVxsrBL15f188oKshj",
  "key7": "3FWzzUzUPnKr5jgApJNCV2cWpvP2AkerphLTFkGDwF9o4465FMA7RyqKQgoqvf7ptfZ3i6Rr52mWGNKV4mjB962S",
  "key8": "4Gs2jsaYyLiUYyuf9M4vSyX4MiMbJbFvuV9JDEmnjpB7Tz33ZRAUhcqTvsJ7Cma61wYmZWv4YrpE3YPRJHWFMjDe",
  "key9": "5AtEBS5ysZR4TjfdDZeRHQzbojsBQ3Tkcia8CxXu588tNmbqZ81PTJDu3U8dcrbKP9WLd8qJZJMiw7G4K3cLR4rB",
  "key10": "rDn9TGTnCXKvHTk4i1qoMywYKnDFVqrAYWoDX2Q9pbPdxNsVaoCYWP5QXDepN9fyE9BotjfBcDivg3r3WwHrGb8",
  "key11": "3FpFbGHskmxCmqgcfgkCbs52ZZRBVSHzg3Fx72UShmZgRMV2oM3AUfJZJjGrkRYZanU1K34jdE5txvXV2pUJP56W",
  "key12": "J4itHvXAmvikEqdsnt41QYdBPAF4bfXJB9DLyd2Qo2CFqiw6PTyKMHv7SbtmT1QDjH61RqvDiU4dEHJCivHLHc7",
  "key13": "5f1LT2J4r5JRnyazTCAYd8Yx6wjAGfLPipktsN2saCffFg4jmKpiFMiQsR1WV1sBFiJqhnejQqg84F8Uy2Fadydh",
  "key14": "nJF5D9jZGWeSXMa6nokRCZxUynMMamP3RuW3MD4WobSnHQAJUs7oShBCkhba4EipMY3FFgzYRdwns99AAHo9i5V",
  "key15": "5jwyEJrxziDEFkuhtxoMrfbtuyyDQhqRQfDzAj7waudh8kq4fez8utZWUq35ghYHZvGJVohfXR33g7TGXjeRxrAh",
  "key16": "3vLZ2r8s2CZ4jNqxpFpv2iYZHEp2NJcmFTFtCFKe2M7xKdJnT8gSjMRtmx1BrhoqXBvpMxQ44B9Ap2oXr25is4fg",
  "key17": "2CCBg9tBa8NBtX9XNNpCUTqSHKnpZCxKRMyeRmwP1ZodL42E5CwDG1MaSLDVei5uKZj7NFM8cPR4QYCfUsSChmvb",
  "key18": "4176Dib3JRfGznV8jLP9shxzEMbWbev7mAo5m8skXqVfThi8UssrPSt2AQ9FUGGcmwGhSegZDwb4f8R75AGw8N6p",
  "key19": "228KKxh55G4SiBYTMZNY6acTpe9VzCnNbkPNeencvEEPokiqDgiX6AJtqk2CLdfNT4GkrhXUKgZ8AcZqSReNQsUG",
  "key20": "6rc5qQPCdExyA8qaQJW5CEmdVjYdyjWTnC7ESYgao9BdHsp2cwo1ohihBokB8LHfTVwXou23MqSubdfRAsp37MP",
  "key21": "oam2EY9GVYmcfyCjg7aVHTywk29mfmkfvtZispiSAhiqH9betLWhWuSkxhjvVwVmRkUH5Yhawpic1vVRiU4h1HM",
  "key22": "5h8opo8xwoSf44WzFj5t2pB3QNTpK5gS6a7VrnenGj9i7RtGHFAqBwRMdugfS7KFRAJYVAu7ozRsKTHs3XqZgCKN",
  "key23": "bsGDEokQ52ojy5JTCeTLprpAyptbSXTi3Eaq6Yj7szahkgd8DRK7RZSJej7Ezb3PHmJVgoY3pyr8UK3rJhctcU9",
  "key24": "58AZsiF81x2o9iq5FMM9FkQTxHYfer2eBZgqExXWhuR5zvEGGZGS2QjD26rpEJcPep5ffCdJcSCZ3AYjncxKH15B",
  "key25": "3FN6ZMZyyWfDWeraTTy5pcybsEdnw6xT9247WBXVH9fsqdkbpihhL3Z8epoTjBDoqJukarfaJYR11FR23sptuRA5",
  "key26": "nkr4ZojYkchYpghZVPC8DMLCDwTtfmXJBxCUip5fQAxH3uZdBZL7ZEAZMbkXJkLpEM1dKXmmuDMX3ohQ93xcDB7"
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
