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
    "47bViBjT9XkUfoFNJPxMrbFvEguyDo7DmGX315EKdBqmPqni4DFBqnvgWh2x8uVnEZFcCaGkrS9pAFySmypYh4zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2hc6zuaD5k3kWNLU1xacx5qWvbDbxzp3RXxfPB5D5qj6zzfz82C6BchDcDFPS5oUfxi2nxssNVfeSebo3URMga",
  "key1": "2SLWAn9XSNhtHaWHzfqoRRcygbgjp9cafN8s37GpPdyhPEwWpP2z5Yrig9sVdyjhQETG1aFpoDC334SAXmTnB9di",
  "key2": "59Vwf1UMXfHCQmaDvUsUXqSoWAP6zzrnyAyC4LwXSXAyygmMrvey59w8NfyeNwvq2pCPXfeYzk1gDWL9hPhAPe34",
  "key3": "2DfoRZezVFh7R9D3h6YuzbGuDeTfaKSbCDwUKykgP6mhcKyD1EgGGXziiNx54HhDQPkqR7YnPfaFSqBdo8rkRCbw",
  "key4": "4k14piSptGEQXon7sXuseVQJPQzxGCYb7FRaZPCBWwndrnbx8XfwT8Kgv9khnPXC1WpGJuVUGAzCikBAFXNX5SJY",
  "key5": "2vjfBdgxTuwV1FH7DM8uSivgg9bLKsm42qx15LpFwBfYFdSpCoXJ5YfceAGGyjPK4SaZq44y4QJEfVewXHBHo6hS",
  "key6": "4cHyTAbRcvVzz2Vxu7Vc1wdEUfa7aZxQWMDWfHqTnsSEeKo3MbFNEqJxiBBUU5e3EfT2jMQJvEadYk7wTXFX649W",
  "key7": "2F4fc9MZnsMWNf6Zk96XwsS8ePk9nryhmWDWsi5BVerMd5xjZre5h839kxEm58PXnvAbtQZd2hwteJtQ2W7HKsdC",
  "key8": "HXxy1pa4rXfkqZjUJ6a3UBS72Y4whrAPYUUbMe1PmwUPDguHysznWdCoohfAhBem3RMWMyBFdfSU9PNDdqZpT6A",
  "key9": "5YHdA1vy7NGTqGvLJfJYMZ8CRxrgWGkpjg8mbtX3g1CEBeP1n2f3hTETkcKcyGG2FZ6VEFwZPGTDx8u7Q56asoH",
  "key10": "6zSrqav8Gn6q36psoYpoDrExdrtCSpubFFEBuctjZ6EDgtKkAMrdq6EWFcJyUEj75oFPDrz5wN6Dh889WnhFUvw",
  "key11": "5gQLgfFQFPHGchXbQFcT8FDPou7nq3BPM27jUkBEdVW2cXUpgfQhxYuCRMypKUPUBzSPXD3AXgWpWDsZFATrPDqw",
  "key12": "6zN8mydKgRwsWLoSjfMaWtSfVUjxZhEHpeuHgkAWZzKGfCaKNBqJGShy7FMe2Qqp6QGzuaxwgPG5nBG9UqEnix8",
  "key13": "3GKokwo5GcNZXcFB6dZaXmbQ9ZekF2QFdrkQn5vKjKXZGGbUamqZWbn8wAxgKYPzj9ms8qyXk9ygaUL2zyQ17xKd",
  "key14": "2LGcyGAnB27iYVnZv1pK8LGWnkVPKDyoJV3aiGb9JJHHcZDqRDEyLYi67WDDnZ6fT3MRiYRQxx25uF66XquGegQF",
  "key15": "2Y7rHyvkZ5dsyDMiZwZWca712GMiKYsaG3rNRfr7bgJ82gFwdVb79wXSFkyxDbRXofDdb9ewaJZnHpcL3TMHaAjr",
  "key16": "2fJR5nXCyfTAHgndEpq8Fdpan8JbHBtspfukV65i4YU3RNX41gVShCVdzdoNxo1zDHKowreXTxZ441jXGJG67ixZ",
  "key17": "4bQSHopHt2KdTXbfxEAXznX4ZLCiUnHuCLzibdHD6pkATcEneCSBB4Y5EM65dnxk3DMWZpX4FN1qiroZzZ1MhCam",
  "key18": "2b6s4xvJkcNJDCi8shWPv3z2z2jzJaLswSnfxHm2ates64C6cnouXNco6HXzhwJneTptaGp5kGmEJcUMa4CW1Cwy",
  "key19": "3XaehE7Kt21hjmJLpSr7QNFPJ8qkAxBWStBcgfTGPtuAUFCpgsDLssGSL6qNhYGJeWqRsnDrjnta8RD49SxXExKq",
  "key20": "3PqFkjFLNvoYz7Ed1k7aTq3uEbDhW4QmSc3GzedWgW7oLT2PLBDFgzDAqbjeUchYfYeWtP5UL3tTPFPV1XqHEg27",
  "key21": "6DCb7FW6SBR2toGhjEHSzhKfvDFvV9TLcrKRmUUZfxqyFVNNC76JyKaUt5cc2bDBPwgnZCAteAb7EpLb8LYoix9",
  "key22": "3EMcFBDvzoBGuG8jaeHdKrbg8ewCPuxeUXftuJbrzoZ4FcbefL77k9xpwCzMPeQRoX6YrWKaezcuyJfSKcNQvptB",
  "key23": "5y3Q45VN1HVDL5CgqmaTGqeiEkLHTz29R6MUwR7Ssj7UYvXn1bxZBvFM3B36EFfWZGWPiHVzYUN7U8C5GLu7y4do",
  "key24": "5pDExb4GRw8vGEQbo4RE7GPeAw6HkXUgt61XZ9Y2AuAGdopSe5qWCheSu22NFZC7exnVPFFj3SQ9rc1Ud5EPBJ7H",
  "key25": "xE7BL4WZpo5F8U171mZTuhr92zcAHLH7uV4hGAFJ5cpiaBAJweETstqitmB2DUuHqLJ9VdjKVNANWh1aKBVEJuk",
  "key26": "28FpefpPy7TWZ2aeDNKR9k3W18QCxifvC2R6oxFJj7dZcn4YSbdmiG3XY7MvK1z6oVrsWgGUsYSghUYnEU3FQqVG",
  "key27": "5EH7LqxDKYVzRPiUdzB99Rsz8RJHTPGMKJFhqSRNfPonUkDfQCbFC3S8uPmCDoASQMw1Dem1Vb37LUBhYQbhdnWS",
  "key28": "3E1GkE6pJp2qpdmnphJXEWgKYf4br1nixxsYSiXJJwEqMYdmdvJM2JEpTRose5WDoEvVnDYuXbTphgPZVSfmnzGG",
  "key29": "2x5GZ2h9FsX54aXUPbPaQECvCLxmcfSPkDEJkLehztEfW8jSeR1N28vCuE9XtoYtnfecBpbFno7y3qw3ZPfk5ghf",
  "key30": "3gcMgihx8WVJ1eLAvE3hynTXWCgqAjEeqWmYknwuoAekqS94yD21e9BR78pbQ2SvszXTnvMaap8xQNLFXWP7Zc2V",
  "key31": "3dqshSFDb5qm9jd6Xob8vUbHYdQJy5i7fUhNMDvYyX8WbAnPtjx6Wwnbemk3kSbQ7FZi6KfF9i94wkdemaGroQko",
  "key32": "tsN1kUvBbHtJ53JDUnkvhA5pa79pL7vVNWe8mxdRgCcxZV76nY1mLo1Wobf1KZmmYKgifwBGRYYUANPrf9prvF8",
  "key33": "m8ckJ7hcb6f8D8W6w4yJUdSnqXxmk6f6LLLcmDNExJFoEbRoAe5h9pY1HYsShA92ZWWMqu535hZrV9dvH4HWVAM",
  "key34": "4kh5qvW1BefFv8h7gCJ68DaR3wyNA1xovpSMjmU7AF1PkLSoXfq1i1QuMD8CYqbxKG1kbdnsH6cWsjPy3PGYMj9T",
  "key35": "2rEaPa9DLJeP634hQx2RvWkQ1f6bD5wPigbvihFg54A2CRXea3eLLspzNxHNb8Ec2YY5XHc8GvdpYRKVC1K2ib3K",
  "key36": "4fuXQACTKP4Sqr4uRScbSZDsPcDuqJbbQVHx4kLnicaMK5toRhjav1ZEr4MkaUc5tBvZ1rGdb9MCvUvydP4aW5oF",
  "key37": "2w5Qi3B3dpm35RvCXBbHzs5MX2N4fDUtsiMjJ2pqHXicfgYotZrizUVgtPQ5ibuTyycH3am1MTrwQRLZdxhHH2Du"
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
