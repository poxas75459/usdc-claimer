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
    "2JsJ9byJHtSzCjMBWgUbo3rp1zZXEZb8PYjSgVcCnuM4JomLesZbCvW5xGGTSUaF8WHbsZAn7VCBve9jc83DrQtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEiZZXaBrGDB2od6jGC2VPxLAziFxTUF3TpYmY2ohkBzV7Co4G4E4kwU1iW428Yp436dncGrXswhqR86WVZytvB",
  "key1": "ogWiRiQKSz5YtkDKixB6rWZrQK4QU6qYYv5L23vpU8bfARJTgx2zsRK2fHuwaW17YoPGfpAUp5YVhP7Vn8WYePS",
  "key2": "5MRetpYMBDwSDXVXeGGy2kW3VyAqAePoxUyAwwf9X31DX8pdSW7UfkJcD9zmobHy2131VkRxWa4WryAE44krjxoe",
  "key3": "gv7giK6LaUR8SkjNqzQsfUBaMSkw5wFJwvGiW8DPXMtw5c2ekUdiHGpAVqRaNnWQtpoWh1nrgdS5a9rZRkLPNnB",
  "key4": "2GEjZ8eRMUfgHG6hc48QrBPFXciVhUCDe9TRCndmSSiYePcB6HrzVyXDxNf1NXdwJJyfSBXE3toeibygnkjcrZxa",
  "key5": "3X5B7MZNt6H5uzLsRPSj591AkmR2R1AiRHkY8HuSeWmUdZb1Rdrh28vX6df4LxbtanaHzC5dRMCgRXpZYa5aTSfR",
  "key6": "5fJktjq6oLEbTtCfiTjvi32gnkCDKPjj4eG2EXXLRQ74MT1prkuFyM4QewmqMwfzs1gRQLVAdeFwZgRo9ZCRKDti",
  "key7": "5KdG8uV9k4q8BbeRsxtPtw9eUX3knNRQ1FNpkdNPJXbt2wm2mvttzw1VeLTeA2zSpqSAnAwuU6RobynxXxMu45Zi",
  "key8": "2wvQDivGusfZZaWqAChAcq6aTYV2aRbLxA5pXKDAggB65ndeLKvYLGaC7uatePMSikYNZ4mx83JzQkBGtKDg6wJD",
  "key9": "4pvEZAR7TcpHoxwXvWosLNAoAJP2QJwtH4bce2uHer76Ga9Xb1EaNxJbdG7L4Be5FVg43HBum4BLSpPRrYSuSx1e",
  "key10": "2x1snH2WXjbfZ1mZpsDghTPGK4y2z7Ry2uweMdRxJmca2Y63VLvBBrG8gquci9d4bZ5Pmttv12fv2qJnA3fSk1XP",
  "key11": "MRKSjLJGYFNHJ6CiXKFFngPYDzR1ufL2k7e5zrmGQeDnXYF14p5gSx1NLwS5BBdfRwB5CpgorDw49ps2PYdHJAg",
  "key12": "48E187qKsdcA56w8CBkHJcqVed5WJPgjNJoJC4wYhD4JtamJxYRveYBrUq8xFw7xdEGQ4YijhgdM7XVxg6tBrFvF",
  "key13": "5FG2FuUJ9QN8yFQf3om4Twqib5XfmHNRjzryH9px4LB89WG1xrsSAQnHTmE7Wasrv18keSF9v1dSMD6JK8bRWMtq",
  "key14": "2MHDiGW1wgHhRjpeA1kFEZaUZ5BggLRQUiMrYsqWZWw4XaKey3YSWZ1uGdA9Zya79fJXYLSXAKZKZE3GnLQyAM6A",
  "key15": "2fBE2vE6CkhKNQbGPw3jmwE8qwbr4kAxgCSsC5p6jYPYZwQKhBiZnG4rV1KjBc51FZb2W8c2XqZXpKxmuadKo7ts",
  "key16": "2Te2xAFPt1nbDVvCrRhC6RukcHfcoBaDoNbbBXUUvVkZksxyx8iyqv4yfxaHLJdoBPL55Y6hvBmeTpJHwWzy8rDA",
  "key17": "h6Hq1iLfsCgub4TPbwbhups62Jmtmhif8yd3EVBFcjzKeVyiBoYgRBYToWKzXdRBULwD54JgotGb6mqvb2TAXFe",
  "key18": "2M3k5omRvr7fSDeSwphGZXTukHFto5ym1br1SGE86yyR3NsLTswmNBmbEgBzboEs1QccRbtRaUbDvSYKTj8F336P",
  "key19": "3341vCPFfojzNFoKRvZeZvn9GnaYTyaRc71rcsHvvGzZ6Nj26BPGNWHxB8iN4H5XqhxiGruaTkq2t5esNTocQbCb",
  "key20": "47jnYEVPEUbh6RKY8eMxtPnRrP3kww92GcsmL2E2cDmhmiG8eWMNAeMfecTogfbA4u9eYMJg28eRumrAHxgroK1D",
  "key21": "29NGEY2xq4w6dntp3685zQUk7abnJiv2gsT1nSG1amUZLUmmwfN6AqXvToqhC7fvHfKCorDejoPAgdQ5G4S6VRch",
  "key22": "2DPiGcVSG5ssVNe3Zakt6GyMBHJGLWJXPRwySV81QhzB8GGSZ3eBjckLFWxhgZQrZzUuXLAoaaScwjtvadrgSXRH",
  "key23": "45wsXk5RpTjBfGsnZHrU8yMg1G9kAdJV54sspibF3TP9auj7ocZ3fqM37X9ESnQ85tPnFVwfVzHNFsa673QoHRgN",
  "key24": "25bA2enDjgS1BePqrP3iA5sp1w5kSmbdUXNkYVjSCrcCBv7fgH7TapKTgAsanrCoado76kvCDsoyq5r8kDcbyjTr",
  "key25": "56CvJqRxWfEpoKcPBKKrsJaZ1sj6dpSBwFUexFqrzR6W9soXHtkezfrEVvdFsPBXmCZABDmhJsrgMfNkkSUfZ6Bn",
  "key26": "5dr2B1QCtsrftK65uvSFcnHCxUue2kgz5xh6YbiXBNEu7bLAPXPsJL2q4RPjF9cWimDwvMEpgmHkGf95BcRkvFtR",
  "key27": "3qNQGN3sFRvUAM6s84dxyzCFSrGaLUqs6LYeFwWGyqUogwxs3tb9P6uqF5sX3zwZPhQYE5cgoNm5Xh2KAvWFxUSB",
  "key28": "4z3Zc9BXsY2VK75FuMgJDizQzcDkNKKdVE4miyyGmhBQCj1eH4kwLVXDTs3rshDsrs6gYQknFcbgqkmDs1NXistr",
  "key29": "33chMtwos5ApoSg4KZQEdfngXBk3kqp1nHdMwRhE4XTnwwBDKK4KKsK9N7bB5spyQ4zvRX4fCTtA1weoEwgG4T5Y",
  "key30": "28Z5k3ZxJDcLA9uNPmrQx9iNVHWuj6vChvWqic1HEMKMeQoMC6Cm6yPVwHa4ZGBmBGuqkknUWCH5kHfyyUpduZvf",
  "key31": "rcsevRSdZMCFo7Wm5ZytTjMSXaQ9ZmYPW8KeXgPkFu66iWfeAmuKmQRJ1LXemMnDDz3nLVKtSNpF7N4S7cMcbNG",
  "key32": "2uBhSWDYbJAUwfb24cz7ogc7WdSs6cF3kkPpdSfytnSZfggM1gi2YHWkCG8gLq3jRi6xiiZBRVJ3ghNbfyDRvqGH",
  "key33": "F5BwSywATMJzZ3HZYm9MMp8yi3pzhnPA9CzKptBGuwbq3iByN5GGw234CqX3wYjUjfE2EprZW8ErAGzdjeKwPt2"
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
