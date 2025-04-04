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
    "2BPjNriAAgcdofELEzprHKXyQarbHfx3nno1AqD96x17RnBjRa4Jsd2YqCGV2i4wJ7WUodGdBqsBSjh3YkACqEX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rty7pgZaDgz2LTkUzLfeytuBvZxnRtoW7yYXENGh1b1Hm3dXaNoiYgnVDZPAKGbBep7GDLy4FyeYn9uhUxZ3eD4",
  "key1": "43y4YKM7MUWAgBUfhrcmNVQYAhYjwhbax5ZU7aYHvACqA3uuQLv415AHomPHS6e5KqNQZZQN6NVymo5YDYEF4epG",
  "key2": "25t9SVRunFynbED3JRh4R6zLnHXUMfQ5fcUGRBVbdyVC2LoipFxw4xsu3KttJntPg6wyVcDcc7shUtbZ1dTS69Hp",
  "key3": "4Lca6zJQsmoy5Vw1EL3wqmXGg8iwzrdfnUvQvNdMVSTVEURKtTGa5FPnuwQfvT9YnBKa3VXuE6JdabCsvbq9aVhx",
  "key4": "59QmErZrogjbbfMs4Mr6WjbbdaRGric284N6Cbo5UCWjF3BhysHSzBE74cgVELUpAnBnJgcVT4x7LowjbgXPN1H4",
  "key5": "5XSHx43FvAVEpEGzhrQCrd2niaRuC1ueVPrCAasnNtoBHM6oNoLHTGMKJPDZ9WxftUS7tmz5Gcfo6JPg8XCHnVvq",
  "key6": "5eDS2VuZy4HVhDrPxz9QqBvHahZkPqH2RKrABu8NqDWABzSobSFSbnFE5ktnXpFQsjND97ofkLttX7cRsGrR6CQt",
  "key7": "3s6UcEE9izt8XCx6pVAG5osi1DNAPEjGn2JtvUpd5L6dD7MgMkJZ4Z3ScyUqittjFepYrEaANYiqmYSBuND7QBqQ",
  "key8": "gCPXRrm1KVe5epqJgsQX7dgBBoeErcfkMbofZ2F7DiLEE498TQVC4WXAJvT97gg8hPeS94jUoDBf1yRBPcwYC2F",
  "key9": "5S33uUsVJPqK4n2baKDjUTm31e9SEEToZrdGrtzgk5J3u5LaDkm3qp7NttHz4c9TmWDPHYpJuWU1t27CYPZ9t4aa",
  "key10": "4grhCfaftMqzz3AFHQaZhzCSnQgGEY31DzwnANczUJZYTvshuwF8pS8Zaoiy28V1XDjHtfytYF5ztvD5GwhNaLWi",
  "key11": "4aWiHHufNrBwavLYZZi2Jh811jEd9yCqG8vueiwNLTDUoVkXJ1PFssLqwbJWTPbhB3cXS8g16rc1VL7r5ZcyUXAz",
  "key12": "zpVnzNLyVZMeMENnq9wRUoC4ydMLFiY91FVv5K1HuzZoY3XBWoNEc2EQhTr9uQeNycFTPWJxpbfausi2qw5PV8L",
  "key13": "8CUpzaToLXBTSPoZNq8ALkW7nMYfM4z4W32Qco94zQvcgR36UG8jq2eDLwHKpQPBbZTCzHLxyAm3ajwTPWbVXCw",
  "key14": "26ZjiBUuasJJLNoDDMmHjHrot82tjcu5QDdyqYyiwyQaMPf6TPDV4rDHTiXzkFb3V5KFssHxesrDEhgJvzJ43MBK",
  "key15": "3DAEDER3TQTwtaFA4FNrBx1aJa5vxhnzGWuSUX6GXPyF7aEzDmP63PvS4CYsyLo2zuaKwpbAC3zta81CZfondxtG",
  "key16": "5M8krLPYSD7QmCikbX73M95wSwQvBgS5YSAM8UenXiFFe1ecCvLgtprzaQz9j5Jw4sxS2XtT5AbLcimrTcbMSyoV",
  "key17": "3gEso5v34Sf65gB4nWx6T1ESxnk5u7C42Zek1hxFqS6iPWSQUHKj1BT7HSnWPCHEqQZjs5h572e5FYSwBUWc8Qvp",
  "key18": "46KcGnT6VDvEafLrDL9N3FeR9243UAgJTrgaRnQELNjaeLu3eUcLsLDoSEcet1GeWy4NbrkSYY7tMbVjNYvLWLb1",
  "key19": "39SETuXKkz6jRFdr9zPMKtyzTDBCoDzhe7akKyc5kZL47F4YC6JYRDiqeowNv1zdsqGkZHHhy8zvkYKuG8UwT6KP",
  "key20": "MqHyJsFfXqJbHLVg1KpVXmLT2jLPwhsZegbuZZyntEo5Ymu5GgGWJtAXYWRKAwoz4Leib7ZoKcw2isrX8BDar76",
  "key21": "rBHCTkxWgWKvGkDE3cCKDLYPjYMP8WbF7mHWAKHfSRcYBheAF3bUSXXSFQ2CQPj44LdRABr7FLWMzoeUFmsCRQg",
  "key22": "SX361QXB8rKxJCLRKBmppQcUQdCVV2AswJcLJptsoTiVf8fQvtMuXXJ2q3CukggQwzSRJaBJDLSfjj8MEtPUv91",
  "key23": "mDxWcbuZHfCXgzjPNJw3eMhgKAZYvgGmQdvS1XBscusW4M74YWrmhJmfR8b1cVQWZzk6iKwJX69xeB3nuQkfc3C",
  "key24": "4JYsgAXC9W4p6zUapSeaRdSFMZnFY6v7SDcL3xgMeQWCHiq4VZf1dhCxtTK7hiGcZfXerhwksspeTSev1hkzFRnX",
  "key25": "2L1PaWmEerh7qsfWhmoU4Scth63XcUY6LcEghQdmHJDiuFekiaWqnwD21ETqN9ix48DcqmHo8BNgHnwbQTamkWhB",
  "key26": "8FetrmocaRKny4JiGnvaY67WjMph6SM7SCvWHCDgMXbyR1kheSwigLozoxwNciasKd48tgdMYzdhnX1QoDZCgpF",
  "key27": "2eJRg1XDRFFXKrNwSiZW9UBZR1Fs5qETPT4RGjGm9NC7o1RWxy3cmVn4CL4Ngn96bVSoH6jScqZmj9uve7Z5Z1mj"
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
