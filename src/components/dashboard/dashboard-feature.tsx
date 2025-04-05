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
    "4jgyVPntU1rxgsbq8MChJqyRxai8zMDhAsj4RVUtxqmHnzrEMHN5RB2oqRhanTX86qHWubtccws1wbkiwryB5kyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rz5huZviRmUzeovVvMCmqCufFhCnw3qU8MkQ7imUR2Cit6yg2qa9ECgAAd9pNVimBM7swgS6Ps24GvFP8n5Nk6q",
  "key1": "42cpGUg9oudyZvERyBgem963x3z6pXso68cbG7KLDxCNydqcVXPpSDuZhjo4aB3eFNSbBFtZxTaorfRt6M4hodFi",
  "key2": "2RgzAP8oAjJEQ2jmzas7TJ41ASyvJsswy2e5u8nEH62ngi33sQLgHDMzyqXfm64pA2JNnEMDczmYvs7kyYbyyHz8",
  "key3": "5AVasR9a2bn1Lw8NHA4v2E9zSzqwpbC5818nEDk4Z6FLYTC1XJF1YLcpzBeU55WdvyLNH6gLvianS1ea3fsVYdZk",
  "key4": "3SFTuDCpdFGUGxNLRA7iES4vtofzditT4FrrdVuLCM995hN3A1bKuKshcofQRjJve3FxQEqc5WBCFSJYKnP3x4UE",
  "key5": "4FzRzjvTU23QcXHuFVz45RBWXFfQMvbVcsMzX84zF4XCCsUfrNQk8ZpjsnmmkJK2SKHJkXAzWczKMYFRu6WXVeLV",
  "key6": "5EibEMXbUkPnJ3pwWugW64ihWuyvhYXZiu5XNdnD1tCD3JuW1szM2F2yuFKqrkxPXEShMpyTVZ29t4Z3QURuwx8b",
  "key7": "5wwFBDQ7Nh4RAkTXWd2Pz3xTUmRMppCbVJztKcSbti9xY5szSWQQpZ1Nh3Bb6Ch8kbaMvfemMgFyuQSVn92nRge7",
  "key8": "4EJmwRf8JRA1wWHAXuYXBikbPMFFzniXcXedTuayfu39CfMvt7DG5i8HMCjpmwpgYsuVbV4cmoUnhBSPd7Nqur97",
  "key9": "4PooRU4LyRBYufmUeQhncxTyttrQZ3iK1DGDfPYT6G7ZF5w9MZykHbogvY5oRoAkXkkAwmHqgWrhyDvgsfh1Y1wf",
  "key10": "s1y7vQAV5jKSkQtnk1ACK5WnkanCWztyWPr5QdM6rBqWuUve7vRRdwzUL2qNVrU8e3CLzFJQLFFGpnZVnGafWne",
  "key11": "23YvcMP3zJrvXXq28PkD59E97sSPnYuyxsPsSBaqoJvkfUCApwnkNLyzVC3ghqsteCiaSG7dFHgNRDNBP5MK2zdP",
  "key12": "589wTw3tE8sMLJp1QeNRWRjEf1BtPMoUgbcS41bQa59eNWvwFeaJy5LZEuLQgiEFsP2duT3bfU1w9ukKMRmRYSav",
  "key13": "5qYFHT9XbiEsnXMey5WNhD3QSuizsQPmr3f5rkKyfSGHL6fiWGqGrM6FKeaAHc6rh28QURhG1W7669Sh4YcCD7Lc",
  "key14": "5ZuDz8wBXc99D3saw5WNeAHLs5S3kcxXyh1d99FeQYktdEvezh9sQtYmKDCnUsQo8Nf8QTEtKsEVHhXoiojfk14T",
  "key15": "2G1AshhCLas44eeMd14RHVxBwZXBL1atY2GygXzHpcSmuexnEYLuyo9JHqTMUDqfozWkKzubCQor4H9YCWL4XZcm",
  "key16": "3W3Mmem4gzndAenaZT7Wpa4CmYvfGra6iNXhxJpxSzn8prnwdKNMC9YgKesxdSBGoswmxxNjG28wLvS16AiLUGXN",
  "key17": "MDFDGmwFbNvEyUNyViQZEggmxQhdXjzRqpDRDsB5H3mDWBjzLAGtdk7eD5DAybx7czvsFsSzczwR2xhe5BZQMa4",
  "key18": "GGXAqPzfmySa5cLaGR98D9Rjmy3W8iVn8Qmt141uS9X1aHre9NrRfQbWBfCLv6rtLFmRSonXLgYqpqV2wyRz7bL",
  "key19": "2KkbAweMPBmiRePDFubivNvzoXCpkpDnMfKCVTXa1TtZebLscXf6JNXvLSMDswXqWG4jHcTapMDwZXdVNkn3y2fF",
  "key20": "493zSf8J1zjp94DG5mdpf5NMyPaPTdrYfoE4UVx6K4i3NVFPapsHPHE1YNuD17EfWfREj2yPVTPr9sgY7BooqQH8",
  "key21": "3jhkjZ3rQ42sTcRHWm8HuBDTmwCXE9AXDzYiJTUSaB2PBctZMkJBaeea8VW9KiHYgeRovb1gX3c6Ezpcd5ra5stT",
  "key22": "5K65cMkbNeiQBfNwFEmeXxV7m2Tdo37Gg79yE5xgje6MMhADGzYhQmGyhRFRf3bVy8uGYZCkf7pnXwfzp4JxAC5s",
  "key23": "2EsYuYnJvBYh1Yfa5hyno4aL14A2BU9gxkx3Hm4oEXWNUWk6xfq5VXmiigSpDtuU8fFYbWpxvm64wUmxPfXueeZ8",
  "key24": "3vCEPSC84KsVphmxGVUJjZF5g2R9EfwCLtvuj4kLfaxJRRiJTYV4iHHVCXNZ9XrKiMRevz9jM2gTX174YZbDCj7i",
  "key25": "62pVvAGsb6Ft4LQes1DWwyVuqZQ41CXznapyf2tSTQcWZeUCShDL5EobhkTJW7ypMG7mF4weG2S8koDGPwzq4rPr",
  "key26": "3HwMpD3nRN3VRT2MGx5nK1dKrJDLcQRwGfo82ivX9LUDWmmH3xGGcds8bXVCt4XNY7iU2zpzBUPMUmNATxg4MDtm",
  "key27": "4sTqpEQpi5nSZAX8BwzBWobuaY5xQ47XbM5ioozv6cDWfEy3husKa9SrmBb7XGxUgPubcU5WQ4sieEiyauxdS3Lu"
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
