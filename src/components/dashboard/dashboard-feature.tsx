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
    "5mPzemXdcoRvEmG8CjYyk6d2DW3eSJ3cifREMrpnXJKoWSjACxro2pkAFKGZ8ktvPPzqY8X59cPNWVScVxVJcpQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBqj3Ck1jnzSFGEfs4256ibVGxYHYPuScUqre8gGAqDMNqczCV7Wxr57z3xuj7JvTf5Wvnn6LHoWFQ7BCmCJsXj",
  "key1": "5VmhXnbHaf6toZZH42UdQ3uwvEdjvBwdjEaLbc7o5oxtG6G46HX3o3171cw7CiqYYu9sWFXgzWvcD9Q6nzKbkgCC",
  "key2": "4VzUi1b4w6sPPj3gwChTYEGcER8it5jryyYkk7A2idE198NsfpKxNKASL7ZpJsZ2b9NqnteKv1a2NkmFGRpUNKCq",
  "key3": "61bwfEJ6rwkhH8YKWa7BcTanyv4Wt6zEuMECtadb8dPPX9vfQexadCE9FPb6itJ4geqFBb6HAKHhTE55AnMxG9iA",
  "key4": "4gDgPDe1UDeRGJJyN2Tb9EUwP9N6TXy5xunv4qhN4Aikfn1k3NmxNUX59LZ4dmMK35BmYQz4FeLMNK87U9nzEgWC",
  "key5": "49jXeRNHvCtC3Z9LzbQGQfofm5aZwpmKrmo2rh3AUS2WgbyKXeDLfALp7NBHsEbJUKNABtn6QEoTMz6unpVbSZHx",
  "key6": "3CyuMTBzuiZsvBVAGUQaJrnLUpARPGVNzwrDcfLieCZBykzWMfLg3BTC476tHcYNZVvWQMqkjiFXhNLd44anxa4v",
  "key7": "5Ce4TH2PfAZ19qW6WYkxBP1mbPBHqkcyL9GT5S6xxGu3fQg8f1Uxxzk6iFmgNWoLcfs2vcL8ByKLdT318wH2BkGS",
  "key8": "3TRPKKyg9MA4ShDMbJ68yHs9WmYM9Rtx6Uv8VQorJu7GpGcSUnneu1GyNnB6upMVXiEEfehBpo2EAYxMnE2PuZhE",
  "key9": "55BYh8Z6Tu2Vw5qahuYzZn127kLF5iVcJwuW1gPimF2qddXPPjbmCC5wewcACm4nKJ8vrwf2XXUx7hRzbF1qxEgF",
  "key10": "2eQT94jVuhB55eZWKB3Xup8WXS6B1NTKiPNGXEiH88LquoptpPcgVDLrQGeg6NZBgm6Pd3ZUeVvpou23f6Mav8EL",
  "key11": "36WHjZupK1LNFjSs4ApLx63zCxYuqtCAGPAFXLs8z9Dw4u1gaFP3PDCeNUGsibFaDee7pNUkd3PBbj5L2Rv1k4qM",
  "key12": "5FJ4uoBNvzi8jEKDUNPboA1KLv63Yy7cqULu81PGopytc8iGM1QMeRHWUdaFq4iR6rKn7u6TRfAo9rc1E7rnmLY8",
  "key13": "3eisT1wWdyJaXPgkn2dDU1z7uSNXSfoEM9g8uNi6fvNQpsrYDj5kWcuBn1Ly3dyPkmmgBnfeLWAA2HPC3g3zdAhN",
  "key14": "29iycynkmc3Egm3fN8nPqEDQLSLWTaoKXeSG2QoajZ3MbGMhGSm9zCaJSDKVqRsEr4m84CtMhpiZ9gXQDEGfUY5K",
  "key15": "3AQbiUxJZebC3FWXs96GmpEFizHkQ4y2GFGxfZaiiMwpoPsY4iJUPGCzM7uw6PmicErxRZDAUrePFyAZUMj1D8s9",
  "key16": "3Kc48wLkxrAUuGWvzGGbZQQnoUjNGneugKU53J45ULwHgFuyn9eUSiaDe2j4TvoiHRW3zidhkKEmPxpoiyxv6vbT",
  "key17": "54nBm6tyrprCyv84dcyV4Z563trKm48b3nGJA5sSxfTzQMQq1XDYTPX9z3yGbHFGnue6mCoZse2DqRs5m4jjjs8E",
  "key18": "51GExwdd6MjT5yJceB5g97dDF1e2HU8jheLxBbYmjPFJKtqbufBSzUgLKdM5iMfDK3XhnsnsQq2ahueneZg5nUkp",
  "key19": "27s5gCnf16i8i5c9ScPBQCrysLxzp2Bey3SYQCC9YryoAJLuFXxk4cxUQ7ic5vR5MPhDBkTYpVtaAY1UwHoEZ7wt",
  "key20": "216WG3hyVTpRMN4B8X5PzsKByAkCRoNwUHUBt1bDXpANYASkSv9fTKHcDQ9cP2caa8YZQ8YnBhDRifHnhe6ZdDB5",
  "key21": "2j6Vdqzm9daLUv5pY5wGYAxxUopZGw18z294MHF6f4hGt6r2bKRB4DRdQ84qadQqKAfrfG4Vojt6hKQuUpciv3EY",
  "key22": "52tzXUzxkUVZfKbeTwb1YyFLnheKdFbPeqRNNrnvCaAvP3Bsh7VSFQngkSKxKi4o7GMXM71NawivNZrE6f4uY4EJ",
  "key23": "5uahUQiJFVBUxFTcemgCp2nab9SPFvvFiyFc94YctAu6yDjMCvQZDX1oQMNxiRYtwRVooXipJZVWYYTrxZdNChws",
  "key24": "5P7rJDn2BNysuHxZ57Pv8JSdh4MAR4wgcHEPMz2WX7Z5BTdLVXrNk5CfDDWb6gCLc3NCCw9RdQYVkgtVCmB8FkVN",
  "key25": "wHJZFVUvYhqUfWMRhqtxYCmT35uJBxyPaQ54cNQwJkb32EGzt7TaWFqzmFpMLgk6M5SKSJfG5TwGu14tazHNCTN",
  "key26": "47XJ1sGrsUzknN16StWkrCpRpvW8x12NFjbTngAce7orF8FYz626pAigNqdU6weGwtkSxYTrEvswHxtUnEdXwanV",
  "key27": "4mpzr84PGX1WnrJLDCqCuoV5SCuJ3SCEpda4EHvam6nbM7USVMFwaNUmYfeZR4zETR2z1G5RXu6cNUR9EWV7cch4",
  "key28": "k13LtaGWj25r1TDn2aDCg6ThBukCHTz852ouLYjKJx6rKrzgkkHeTDmCryfMW85hGtXKokuZBiJ8ymvCSNUsLFp"
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
