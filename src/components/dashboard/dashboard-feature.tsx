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
    "37xyLDEJ9sf8eawnWBbR138N2nvotJPTYQp957QwUWSv7EFGDAkmHzqXnE2wdu1tCxH7Nxrw5p2U41JWRC8xmz5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytEJEzmWc5ZnT9GJYVXeanHiEKXSPLR3Wtv2xZBuYzCBx8iKZPN7csZPbYeRLFMwayKYE3rxnskkEUxCdrGHKgX",
  "key1": "hZj5W3r6tfteoeM2kig31xSdn8LXuYYMiaTWGoZi8mrQW4fF62Xv6MmmkaRrQS1cZwPy2cpxrfCBmRsNGamsm4S",
  "key2": "5SoqozMzDWffJiSoLP5YQXRyiyhs5qmWJrJrspmAoiS2YnEruiTiFBuA6ajkwcNWuLzBJ6uyt9yr4HqdwkZT64kJ",
  "key3": "pWkBN4sevPuDukJUJsrcC6JWZNYiZ9xqahSLButBi2hoME4cHJseUheoyZZ93SQC4L2JrfvUMiRKGdFx6zYtiuB",
  "key4": "416QFjJnEgikRDJkwC4EaXBytp98Bs2DgoaQYoh9fNEzdE2UcuGivTCvJP1USf8jKBtK8fSxxWbtxBbVsFxA3k3N",
  "key5": "2b9xCZjrN4hTUdifvjWCKUMA4oEYMeSTcatsbCMsZak1VRnGRyTQo8mZrKeLkqTvzb6nHKxABb1qh2JG8VaAaids",
  "key6": "Haqm19wxKsBmEDRTYewyJgmn6P7ssBXvPfUdwNjx9ptDGSdpMfBBxmuftaPdj6TYXcpf2gDwBQcggfJjvA1dWHQ",
  "key7": "5gkp8BCZoEJYTdk5488x8huh1ftJLZLRABrWWiPvibzH9DdPe6aEvbJU7PGCnkzrNTEuX6Ezs53Qn4E8LEZjXM4R",
  "key8": "29jfJtcHB1A2tTjdQhCorvp2uCjKrhxgELTLRD2GaTrQU5PxfUWAPNuhRdEkaSSdfRh6DtgVPN4AkQokve88fEgu",
  "key9": "3jdFHkEECNyR1PZK67SeU11jfy57hwCWr3qxCZ1EBhnme62jAKHNXkLD2xDRE4zwK5WjfzpqpV2uogKDn8Jo3DzG",
  "key10": "29Jhjt3ZzYdNXth1L5PL3VGyFxgQM54gEvN43M6Wki9YtgR8SMKHHiF1WYEEF8YP4Vvm418feczeSzDJipNSJeFx",
  "key11": "3B8XQkigGdVov3SiS4JAe59oqQZ7E1D2m82ZX3JxsLxg8Uxu44Kep8swwPrwSN7DVoTpM1yp9Uk5ZfJn2nmNZhdq",
  "key12": "PBXEQiFGjYHmfxBEWK3BqxjaDR1ZwgRweYqfSV6wdSawxJw7WYTyuebjQVXT7bHJRyMSP3G3PSqM3kzFT9ipKTU",
  "key13": "62MKthcrLpQTcJotM7DW9U5hucgWYuvX8GXq7BXEtfY7sPBd3hBhGEFZcyvtrHwX9JESxK3ktdBkY9JKcwZWY5Xm",
  "key14": "5XL4oo3Eq6ppPoKCx3Cg8tTVdzP7oWimtWBU2YxjeLyfncqUWoD7akqu6YHLPAoLzKXQTCKG4wHw8SA2PdhNEJwC",
  "key15": "467sf45Wz7NW29AV3EMxwBfqefLYf5yE2dNstMTZxezzwfFZcqzZXwyLnvzxtE5PiPGgwgZ9skcEwif5jYYGD2ye",
  "key16": "X4ZB5WFsGYWWsu914LmoertwuxKFokMrhyaLuwk92nHGSgf96aMctuMrvUWixKGpp3L6UZKcYJii1xdcLiM8W3A",
  "key17": "3oSjDvwNXkNXfdGSyberbybvh6eKEuSuS15fBVynCbdMnb1jXLnpBSYrinkXBzTM8P7FQuXcCn4cau4pdqW2uENF",
  "key18": "2pcypcYLeF95WbzVLF7WhZVjXcGWe1nRW26Z1dYz5parqgUYEvFCw1FpRCQ8hDPUJNJEFkVtPtC1JQ63sswKvLLv",
  "key19": "2xVVrwvViC6mP36tL5g9224jAEHPMFj7Un8VDcUpcVU7hFj53ntnEYnTsXUwMEPHzyk6vLw8pjVbXx2zMHNy7mQf",
  "key20": "5uNFrXNgNSHJNtU7Q5yAsaZmz9ajyTM3ytw1734yMfznbwCLiB89kpu2u7gC6xD1t7kMUsCQyb4fsMsxaANwpvLF",
  "key21": "588aYKjKwLJytHYJxszP4ahhQ1bwwA12eERaBmdjh48YVZyXiSWAw7B6UPXeuoxH5H4sJF5gbeCSNnmSeQKQ4Zaw",
  "key22": "5xxHKjQubCio74srzK8gEpaEZF9qepQxibUSeGUAE417a4jKs3FRHksuhiFM12oWwXFkqv9FH3PbuMr2RmZ3bB8T",
  "key23": "2vEVPNpwJqJXY2GHjcLbzrGnapnMLDXb6QhWegiLuAM8Lvbdo24vqSem2XRBUxsjpv6xgXUNYZfjf2dnUybrj43R",
  "key24": "5uLAGVVpBvNE8mcLkA3BS4C6k1Mn9RMiZpJ768k7KqTENYYQEsapgkZQPFg7ULLppVZ4oeGrzGSjTkWTq6Z1nJBi",
  "key25": "2Qsxi4qr75dnHTZVKaNAZGdHjUDQXFfmGL9tgJjSWQXHefyPWbPBi2XhaZFcnJ9nY8YJQ1JF4LUY3V9PQxP8kANC",
  "key26": "5uHgSDVAUc4GTNCQFdt1nDCEfs4RSk8bqGWn8B9riHdRMk437U5rpA2rgu4sgdjtHsvMSYzpcWLoC3GHH67RBH7d"
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
