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
    "nMRadLeR1hUvX4whENadfj9hwRv8wZDaSDHEwFsyWLM2uZewgmhwSC8BNsWdCKYSZYwk56ggJdLEWDa8ghxRERn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mw9gurVLvt842Bu5BNFhZjgE9XT4qavJn1FkKRaRs26PjxGGyrXjRBocBm51FEaX9QkKFqMhnNuNDHuaRqg7k1",
  "key1": "Au5hw1vH5bbBs9xSQJJm1CxsrRZcLHHi2QU3r8H4DKDKzDZvAxEYkyPSNtwXo4yfDnbhDhrEhxbCSnRWRSunyJn",
  "key2": "5dgdxArnuHoJs8HvvWRodzStM3xfAxZPreWSEvNACjKZxLef6fS1dk2i5h3vt9huatiVTiZr5hDGd4AqtPpgc1V4",
  "key3": "4XXmAac9vmUnznVB6RXdGbMm2rgnbqHcLkrz1ye4jwDY7Nev5YuVBAKsYnBXdVUNcVvi9u63MLUXEsF19q6wJzzM",
  "key4": "5ZnK2MdS2y7Y62sGeD5GbmomB7PQMcSECSWJH5Bwx7T26ZZ5ZMA9eY6ch3cnrLy32khH45mNLHan5CHavsJXAmBP",
  "key5": "2WBGsLmwqfwfMTYT6DmBugTMZFCyy51vwCMyAb4G2A5shDA4aPvBEiyX8gcqTvZcPRokbZC8GVYZt95cfgZfbKTS",
  "key6": "2zMK3qeDBoTFrcfPdhfEjixBYpgUiaYmCtLh2q8xk1ZmqfM22puNoXYrv83Ubm3LFvdRXRUrubcDZUpW6KDVN22b",
  "key7": "2Y63K2DpiErc3KYMXuYxUPzk4y9CzZY2SvHatXimfHnhfyi5dXKshkV9iL7ZJ5WtxApxHEJg5QLax9oWGKxQu3ka",
  "key8": "2XTSJ56ChSWvzDnZP2HV2eTtaTzx3tuNX4C7fomrLB4MbMFawtKvV6AhMN8xmTs7za8MTfAaqADJNeJz6tV6jnrN",
  "key9": "5bULg2DkNHkWQFLpaCwbcaPicrV7qPQb6BfGPAJSj4oHEhm5DXorhpXnjKWkgtoZa7ffUqteYZLrXT1nq3oz3fVN",
  "key10": "mSxvumf8KQRYeWR4UA21fJffHEESoaGgQqsxfvG7iMpaFF7KnWuCwJyWQJCggHvZD4RUZFv2g5u9Bw1bTdD6ZM8",
  "key11": "2vtcafkFMg6Ufhi3suK3aQz5uBLy4aLvBU2NS75B2d6tkJzysMC5HUfcZoYz9J7xct9kdWAgvHtiLBgdRoZof6DJ",
  "key12": "2BC3kVgQaRYDn4QRFDaLo1RWbeCPz5mbLZGhMFTUreno3vzn5fkfq4GECQSKjDLDwaDgsv8EZEPRFR6CaHHg7VC5",
  "key13": "2isBVtbVXyuXGgg7yqQzrhzgA44CZd6Hi4S2w34CrEv3qJEbCe3gxQo37afUitPAowriN4zBUksezbyU18h6B8KL",
  "key14": "2So6b5wezkqqdV2nLYsrisk6ib9xcJJLScfTd3jwAr1FouC11Xitwvi1F3rGBKo31WGxR1iUeyd1eEs8Z4Gud8nA",
  "key15": "3v1c9a2x6WFpZWf2jjB2HcFR5uZU4fCR4o7qpA3mG1MoV4drmr7y5NGidYi4SyYD3iSCq4MukFp3PimM2heSdvbG",
  "key16": "4UrsHSiop69UV7e6NSy6Dxx8NQsZoXFB9BRreWyvrHPxyoD2pvRpurMLdBPbqkwBKWbv9b6YKGRC1fJLhoNxP3Py",
  "key17": "2tHZ1nfedmo6nKRCqnHqc9KKLmb2iMWW3JBfHW2eEiKKcbUKDYGNnwf7DdpyvkNEnKW8kAVWMuhqUtp7yQYvB6a1",
  "key18": "vbkTzEAHnz1syAXrumJp5tZjbbRxmaJJDrqhAs3kMteyiHn43LgWHzstGfHBzogp5uuxAhAaJAy11Sxjnw5Wn3N",
  "key19": "adEy68gg6vR4aD5m96ybHe3BtZAUiZoBaJSZioSASxy5TxLznWnBJ1kVUTEGdjVKY6ZQDt2cxX9w51d5iQaNYcJ",
  "key20": "sgLFHvSK9yCmfx8ufnZuMWvXUrNpb8pFbZdmgW4XHzXZMFsgfRmABAp2HrmYd8ULshujw8u9jPqP37wN9QJdRfq",
  "key21": "2mBz85bTgFsUKuR7N8hcHB4om81zVRDBHFzDyJ8apzEDmbJaTc1pDhCQQkrfZg5GEeDxZhsDBiijxfNYDPt9BDNi",
  "key22": "29yTxdj9xuwPE2oGUs6Dm54eMFPBK9qZw3V55eK3yscDhYEZxVfq4XkCwkTkYYVzGkctfUu5ivLnPjTZLKMaHFao",
  "key23": "R3wsQadhmbZQaPUG7vWiMZK4p9HeyoRqrGAsadv4vkvcoxyLaAqW5Xzdu3k7gZgpU1fdjrTpiyNmAxEcB5Tucaj",
  "key24": "3PgWXdPZnckvjpeekSj6X4KYvpErjiLF1rM1xcEj7mycTXmnBDyfrKHE76e4MamoTBpXLs5zy8nPpp2bEb83KhXT",
  "key25": "LwN5LAHiph6jGvnD3ozATExdMmNQyKJe4uWW7jtfzo27h4ZQMfrwb6wNwBF5tTmgmt86icsYD6Rh4e5fjK2bLQA"
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
