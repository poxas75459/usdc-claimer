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
    "5GNzYTLdFNyLhbKDVr27mX2Qwixf8egLArB8cVT2RvsZkGv8cbt3UQV6prUFEL2UMKzTqmUXeFjtSKyrS4iEm5sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uX2NYtHa4PJXVwR88Yozc3EGmHtoMG9MK4La8QesBfBVRRK8RZ3PCU4yV3zHJGeQ7sd1UqgLRQAKbCAbEdoAuJ3",
  "key1": "28pDyGXsGYRw2UKnJ1u4ygxFMrkfkFNWwhC8okkHGJ9L3e9hGcqBSYSR7hBBiyix3YacEn4J6WcbYxmFrVHkWcCU",
  "key2": "9f8jeH7dxvpbjDLhzgmx8btSaPSxS338j9Y22BPrhHqMQDWgu7adsVXFTkv9W5gTvjJLYg15U61V39hRMhDpaRU",
  "key3": "23iZ7F3hEVAGTmDq4Tajncgf9UKBaoMWeA3RXcLK6B8jpeVsbnmvp8CJy95CiFFwf7BBXWUYufhkWjsH5gyHHJzq",
  "key4": "4KEANK1kVoJcCcfCiCRYoJkMqAp9f7VSMX7FvxWBdmdWWDJ1MMfchJJA9qB39yJBKS89BEnA89dKxiwWXWReQJYv",
  "key5": "4YBEJ8Svp4oPHN2QjUrKPaTpj1VkXogDb9V1ug2rmP6jFNqdndxSm6gZpaUqAKL8B2ntznyN8w6vsxy1kHcJZvaT",
  "key6": "2rrHumWxcD9bLZZWeVGowzUUXG673UssESg6vs6QUA13VTqLMrAc8P9M7XBg8PEcX2Q3uixEPRowf5zGvqr7b97o",
  "key7": "2j7TdtksCBrDcZs5BLomzJtNGAgAzXZRqhv2utiqGwaxW5REoPUquynCbPVC4pUcaWQXF3LmbZQWCUBZVFEFMQCA",
  "key8": "5DiGqxSKCS1zhz2Rm8iRyxus2y4xk8LtehZNAh2EPp2SN7DQKs42JUkZzmoyZRwV1fnKwqgALPDUNoCNGPT59wCP",
  "key9": "4quPLiwzhC1EwRhRQwGc1ES38gL58ry2xDB5GM2emVMZFaUgCyi7tmDMJNTQVjTftHaF65Q9s9TzymZFyE81bKSb",
  "key10": "4UCivK8JHhg8RmtNzZwES44JchVxJDNPwzRW56bsY1TCYqFwTpqiGUGxhJSyPDTmr6KdUwxcB7tWHESytix3F7o2",
  "key11": "4RD3LU7kbVWh8Nzz8qcJ7TPuXxazZTN3D7PBf8dbxaNuxMi5yGk8pWLbT9T3mTPaExaK9jjV5u3Yd9HPtMbBLbZy",
  "key12": "fhqMAh4RTXMBqf4g8fgJSrHBQqR9RWuFz4VgHJVuqcaA8FyghYpEAEbdskAL6NqM1HggiLecT6kvc5uNytRxxAY",
  "key13": "35FncJm1GvpnfPBngrL48T52Ayaq1YjKCA4jeCeiyEMN4AZxqmxbRgsp2mnuMpgfFCjdqroqaGfoPoKi2D4PL6AJ",
  "key14": "3peG6DGrm6NGpjkfnQhbymNaxpbzqwYr1C3rJj9fr4aofBpPxdasKpcQnwkQwCJTSPdR32DtB965iaMRPFKHGLRq",
  "key15": "3p8FBRz5AJ9Fvve8YQ3U7uiJya2VZ7QBBTvRmKNJRJKzK5wHuicMc8LHG9x3DG5vC9fb8s3oXiLvLeV9qAcoqbv3",
  "key16": "5jtD2frLD7wydLLQD3Y4XpkZFb1d2QkHiG7b1edcwe3eFChVCD4fMiAjEWbtJthSYbKBoWZ8B5oed9hWHxWTLDnk",
  "key17": "3URBspGrWjGavDK8bzYyWWb2cVRqz1fe1NHL5dhdNn2LmFNcqHKDtH2ueXvRiFHae2UpQjtGdhC6TcnKM3uVvgYR",
  "key18": "2ps7SvPKgpayGNRaYggsX52f3SSzBMxoaC8d3W4eJbH4X3NW1AeVVLaKxv5GhKxnBkoywWdZF2y2wbKfu6cztzNi",
  "key19": "35qMw1cNTob7ow6ymqEVHZaEwJtYxmtcTYaqtvFw62VJ4eWRfNujf8RkqWgV9VAyPpXq4d8fV6swF2cnYwXdCVNm",
  "key20": "66KxXeycUMcLwuQfnzZVAjbdrv7NrhRdVzbsYZh1nqCGwDMRKWgo9nDDS3i9XbuYBreuL6B73wSwoByWijAjCULp",
  "key21": "WN9fQ388BLaGjVTDnWPtFDC8FU1UW4MqoDCZPiqwqMBtapQ7z9iXKaZVMviCnANSFY1LRRi7LSPmYke5o1fnkNz",
  "key22": "23o3U35F6yoCUqj5mEGa9sk6qdp9u4fjWeM3xiiUG2BRfoXNBPxS2BDajsQQ5XC8Ar13rjE9RGW8rT5xaERFDXhR",
  "key23": "WmAVXmM8pBFffME946YQdFJB4PSvKUSKKL6Le1EHYqJf1LEJ4ckRBiPK5Tqshwdd8cugfRTNt9JBAGQpgFQjiic",
  "key24": "h5YVD6YQ1u6fmCmHTK3XSC4Qfen4oScKYpGine9wY52rUbnbqawbeYTnoZ25NgRjK4k8YxEoqjGjretZmSfHks5",
  "key25": "5b3oDwXfr36kZmcXGWKgRGF9zmRc9TBQ7XvGaT99JxM5NWr7EHFcmZggpQAmGhpKp1Tsqrx6MaoMREYQWZNCfsAQ",
  "key26": "2jFaFv5H9PN48mz2zSBzjmfasqdMK7BEJZ5t8CFZCzwpigj3BgQqEWFzDZ54wxT5HWTKjjg7zZPPB4Gn3u8vKe6x",
  "key27": "4uYwEzB89rg3ipZ38e3PgJyuVPHrX3Fd8M7qDznH9vLSs78Mxg4YdvQHDnmofuEuoj4HCyLE45ecRnMsAVxMVaNZ",
  "key28": "63khSXZkrqTeEkqJBhvAsYzp3YKaqkT4Vj9fN5LoRU9uRVziJdrWnDgnRbqjmZtqVSwh2PL7yvWkLXhgcHHeHRjv"
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
