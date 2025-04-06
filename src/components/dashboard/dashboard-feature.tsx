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
    "3RoA3WGeL9QmsrSmXVZcvo7G7FDbZff325isf3hKeo1u5XnztWbcyqdASNcUvsRRPaVJ5B937FqGornwBwfTuDb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vL7bPqB7ThwkxvJwamoZgemk3cSZ1kd3HBTtFqnVmEuvmJLyLML43bhJMgibqS8PqKBmL5Fi59ahniA8snZLHZ",
  "key1": "6652bwtb2TsTToranknX5LYf1uQtKqYwxMX9DDwxiDYc1xq8evm96oaPY8Z7q1CcRj2SUi8kYgdY7Fh6E36N13xH",
  "key2": "5yCq63a93a6uKF6QJHQiLpgpvEZbrczhtNSQVC3KTNAzWiK9n4npxrwBZ8BwLTnxtF2UwbBiAEobqXAyMuYBWgVQ",
  "key3": "HXZ7PZU8vh3U5YHMCjRpAyD2s4BaF4Eyue1cApUtDX9dpTi1FQV9ZPGMWsUKjWzkXipsxRehxCLdspWUVeovyVg",
  "key4": "3pEg3e9BjxcjB8sAwzNTPoSZZdW8U6a5f5FLsUtrhE5FK3PigrDFSMVH9B2EYars5ssaQHosTDC9k4z2DpzvFqb9",
  "key5": "3tMbAvK6E8xEd2u3yGWkq4NeTLadc52V4Mx7qU5MsfCrAT7sKWjWtbQQ6Ssa7dQ7Fg4jePFWb8eGU5Gfv7Cmvi8H",
  "key6": "2CgnPbVioUJG6kVzPDqosmsjPzPBgfMpmmDa3uzW19J4UYtor1FpN8T6wX8AGV9KvWCuy9pNbQEQjYmxpQyrDvDw",
  "key7": "2kdXS7srKy77Ax3Vc8s4dwKLXGuHLAtt27VyeKetDLqy9RLrX1DcTaYRqhsQNVGxZaz2eU4E2rTWNwhKzbbo4ATg",
  "key8": "3rE9SzVG63eh9w1SA2EGQ31JpFjwFAYpyTha6GoF4AT2DRfAVBdsDXsPHqDzyCvHuKqBwPbjG5bwicT3PKz8gwLr",
  "key9": "vwdxZbHmae8rEAzjW3iR6NL5fPJjV8kTy5DiRBsxY6wwhxwDkEkghPYbHWGsk9MCHvEVZjPgRTv5x1SXE9Lx5t5",
  "key10": "4r3E939bmdjM7sBA4inSGxtM3DRZrmYJTSv7jZAcM6pGXo9vC6MtphSwEqwDknQGJV2oh3g9PzFM667LVsGhqASz",
  "key11": "4HBMv7prFsZuvHrrdZFYUVajBUQaC4GpKJxqMPXiHtQ1GeXm9PtYePPKdVjXYRZHVH3eU1sfLPZCTQN8AnRzXDcr",
  "key12": "5zAJaFBxgw66Ue4B2afGvvZ2cB5zGM8EUpKnh2i1Jb6Pm856Sm5swnDwUQ8JRHU3VdUdpHf6D6ZzqmNnFNDS11ri",
  "key13": "5SdHnCHHT4KPAWjH8FLEreVfyZD97RtmNkBaEvxZ826DNhTa6Nk9kJbygehmWnJe3G54ts7o2FFxrz4MQ8hQEve1",
  "key14": "46p6MYaxu1JjyuiW5v9JK93nKGzJ3E1QcoKb6vfQArmvYmATUpAhY1oM4yTM1wys6aQT5Wtk47fd3EFVhMzud69V",
  "key15": "VA5tNUeTxrRqZK7LkkP1zAAaLJwJbDEpU4QTrAakwnYqr4riRxDNDZHZP8wY4MgS1YaCEhfxrniup8dxon77W7q",
  "key16": "2ZZ4p9f31T5aASem8ZPcTEGc7jrWnUFFehzZdi1sMA9g2L8ihVWSgT2nNCQA8w41w5iFKbQRbRap73f7ntNPmmnf",
  "key17": "2H8wTWyAjoorgd3JLzff28CT6oNCZVs9SxmU6DjpQrxfmkeGskAXxTn8bhHmRXaZN5rG5qsiyodixbZKfXtcb4U1",
  "key18": "66eotMRDb4SL3edXcEP622fazC9c167TfoZ9M15xK8Yg2PL2yaZGucTeuNfNgHtXUjZtSYf9KvE4ZzrfX8jYgfgo",
  "key19": "2Bt6FYpHVTYL9JguVYYryWTvwNixs2s2qDugGepLV67cBnvJMrXHwfqznTNCF3XFjr4TPam9i37CBhLzyVQCfaog",
  "key20": "4ij4BWTQ3kt9ddH7aWHv2MM4fJztgeihxmCJ1RsXq8k4XRw7PKteVPyAQ4DpoUNToZ6ksUR9ewHHfGyqbAMfVQsE",
  "key21": "4g3jDzrsFNrZTdDAV3kJGibwKTSMj9zrqQTpEKBrtHxhxVbCzgenDM2jnVzQA4dyR9jh6ng2N1kkkb7quu8ijxwS",
  "key22": "54WLArVeM575RWfnULeaHxxY8nAGDGvD8kZkVP5CmT8mvLBS4zDez8bLVaYTGYDPE1823HwuY1QYDKyjeftWdAZp",
  "key23": "2PvgmW18Yusog7h3Su49g69ocRh8sAowhFtBayBMYKLnzn8Ug9qjsR2YeUFJypnqLpyR7W1QkUCgwna2J4wjr7HP",
  "key24": "29vvJTtwYWFkedRztYQ6YjauRbDg9McL81e767T8rGwDKBXoWMd4MG8s4GvKRjofnNhEVTEViGpFKRkMUA5rHVs9",
  "key25": "2QBwR9y6giUZwAJiZDDSLWmRFhPYtB1AbK794embegT8HsDvnWRtLrxFPYDcTQGTtFeRkdwVJ7u9BF37DVY3fYLp",
  "key26": "2BMQvh1cUmVT7pzs6jJxCmfqDj4Vx6TPzzwW6HxvTa9FYwxgqpDm3FxXitRhe7r8j27wFFw1KPbh1terxDdv1h5p",
  "key27": "2UmKXWM3EfGukunCTt3rzjZEu23MtBaKLEwSWnuh14c4fNM2CSEbmf1nRXKCZWivY63RCV5RsVTViiqiC3pMndrG",
  "key28": "3fMShLD2xuJKqZzWqosBBQ8MbxXXLZjBPem9MwSfyfYhkkhxtkdJzGV5CUEcFx95ENpiUUYSfi8suMgMK9HyvvNb",
  "key29": "4dGTVsc4XLT4rrC2bbT7NYUmG1WVPPsD1uqs4GShuzktTryo4pBg4HZRam1GLU9bZBa8HZjAi5d2CdV7stfDaVyg",
  "key30": "PXH4yRy3oxJK3LZ8UFRqhrF9sVS4YTvFqaa1b4M4SyKecKmM2QeQQBHEnpE9g1Hidr3Ksa6AeznyWy83hSfgaFd",
  "key31": "imu6UnjBEDZpAjoB6rSv7y3jNzX7oyTQfad91jsZvpvKwUV3kNbityDi17UqeJ7MfGZaYnQ7aUyd6CJPrrPK7zw",
  "key32": "62mxWjayC3ekSK2sbmr3TgBtrbsbLX6ZPBhK5tYS18CiqcEqPjF6B5ii7wkER9JhkHKr26txkjgniMixSg2qPEGz"
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
