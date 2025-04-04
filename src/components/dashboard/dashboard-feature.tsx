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
    "57wNi7yRXyrCHhFeUsitLP1vzzPr2uPWZyNnPWmUmNxuefLJCPTfFoTcNQtwmLFFyPZQvuiwkY6tkriK9hinBr2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SykU63GokNhYHokTyL91sxSMdBAMztxkpKNy9zz5yJUpS7GenjHx98mv4cgtukfEUgu8Ufrizm7MLEa9jUdwQ9Q",
  "key1": "3hJdn8pqwqRDWgSKDQ6i9skCDGTGrbCAp8qCeaoocHfy5VXJ4ZARncLRHQoBrhXxhncigf82a3XZyWBBgTwXw9Ru",
  "key2": "3DaRuAzAT47kzpNLcouqmbUY7mNFkmpQGhcwEDSvC9uMCLifA1vGfvHLwYxAr27DMVxRGtYXdaPmAx8U829U5tMi",
  "key3": "4VQWfHokDPe7U6suAr7Rhrf1X9ik6eSoh9yGGyWaMpkWFvxo5h951pvHF1Mn553M9DTnaFpZwQanTqWEztPh2Cxi",
  "key4": "WPgTCyB9d9mCp42wBBtUdqsiAeteyBsCWR2gC768TWaxUWsx2VyiK5vF4xwDqiwA75HYSiyMqMxtkK2SXrsetRE",
  "key5": "3GgD3AAuF3wSAVSgkB23hA5Kqg79bYT85JGNtaN2USxUPNpCFTJ2wLH8qVmKiWrhDv4ixW7uVJZ7uWWLGkCGmarz",
  "key6": "58bm5Yw2jURALPKYfTdgfe6yj7mAuAV4Eq59j8M1v2Z3NYQDsnGPbLN1jJwjodSSH9PxC22BFmL6tssGLJDkEVtM",
  "key7": "3HGj8gDhWNRrmuCaYH191xxiDpewLdcY7qGrqk4mKVksPfGwDGCzbcjXzy9uutTSTtY4wcCXLFmbEhNFkPuLU9hv",
  "key8": "4qBojdtBV2fGvUjJgBxkoFfiPBX9jhsBSgvAuMARfkMfzH4zoui6AoPVBgCjzMHpVqW37Z4S1nyuqCcFB6hxYX7A",
  "key9": "rJafAGbQP6FGzEN9FVxn9tDT7AaT2GyJit3T6NLibjEqnDKtErhdc5VB23oSaDhKKbzFYKsuJz7mgP5B7q3ssZj",
  "key10": "2CweTv2Mxgcmmqzf1kZLiszNAKGP8kME47bGYisotXfGXnnCeCRSMX55xn1N119sPAL3mwHwKE7k11ibkGn7dn9D",
  "key11": "2pPJfsk8W55zVd4BoPzCoxy93vUidtX1xam4QyiYDcUupc4Jy8VuLDMqnUy4P9e3NVU9LEEu3Rx1mWEXqmuFQadh",
  "key12": "5At32615FA45SMS9AHVgiKrSt16qXdpQBaut5pu4bP1VCcrqBwR3ddiTTdfJkZb4ra1kv9DbhLG8nsnT3z3ee7mF",
  "key13": "5ZaLypsSTVnfTdyiSoSGwVnFq5CGZXuRhWPrvKf4opqHxUPXYyAhufEa3oBj2qYdZJfH5FSDNrjvg3QSK34DvAp5",
  "key14": "3GXhs8YFj5cZDFbfm1dxUk3R6hYmtBck4J5X62X3GdQKNR5bikoAK7PVNiCSSh72ECm2kMKkoFFRzJAFbY9AYnLp",
  "key15": "4euz3SPoMbhNbfM1yacNJU6Ge1D8uTe7BkZf6wRcddxEn5RzZUjSYqto8XkoeufKt1ZKTqDf2vHbPcebGEoawTBX",
  "key16": "23Bh4WqXvFvxDDh7ufGqwKsh8Dpu83ChVRZ244JRmNJaVU2xPwPZLPoe5EkdJboPE3PmQ5DYuh1Thi7LNwU6qUZ5",
  "key17": "2SbGM2vYsFEX8WMMSKWJ59y1R8Vx6dRrH67gqqvradWDFwVNXLBQ4DjW3nPJ9G21oj7xVV9G7dfefxKHueDpdtX5",
  "key18": "Hi9G7zv8gS83EFyB3W2uJtnHZETdCc9nKKNrDnn44s5beXjzsMBUeUyWV13vm3Lk2MiN8j55dsuViqwJAue7bE2",
  "key19": "2Rpnz9nwyX8jjjGrLXB73PcsLagzx9rxo3i3hzn6hksFAUbkkwwCRbmEV93LQvP8jkzqh9fCSfaDCWMWQPJJ4GKR",
  "key20": "bdxTe9oqaQ81gozHW7Zgj2LGwRmC2kjSQWevhemygQEghpGi8ojssYm6f1EvfcPCWPGYxA6YVW6SPGJfncgCw95",
  "key21": "52YJkaxKVvmNWojwiRswPUEypdADmpf3QtUXBr26zSNJ1Z5Ar916Wrqxw1UjEZwuDprvt2q5s5MAV5puQd7DvPuD",
  "key22": "35zyWUjgpYWaB9VYC35ztzzzMEBpQJPE1cF1T6hPv89dNPtVaTpGezyZ4kAKPh2Uj47CoWs84v9HacNuf6bdHGPU",
  "key23": "5aUb3zVJQjXszoYseLxN2sVkr95xDhh3B7xJPCkxGfi6xbmPfYnbzE5iuQwtYmKycHAk6FAo5N2QenaH6zNajKun",
  "key24": "YCAUQLi6YsbuGXEVYuS7fQJDfxvSX8Z9vN5DkgMRtQLkf2AiE1MN6Y4uAamJg4raTRVDJxvrrHebsRmSYA8zifQ",
  "key25": "aVWxLepX6g9Sc8C8mbmB3Fgyi6PsjCoRx5QFmMY3CpDvReVKhzdgW9KuaJ4dGGXN3piwsUHX483ePfi91iohxJ5",
  "key26": "3BfkbRQ5W5Ei4bgkNNf1kPm9PrU2g81qKEqMREdoaHW6emUccMeCYohpQ3sSQPBwpnbNBPQGjvGexzbFHh2TivZ8"
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
