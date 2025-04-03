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
    "5H24yijqobbLm3HcwBxfBEPS9jGu5JziBjUseJ8wFns14e5AvKqN4MDKutw1QxdhB6tFRPvVvZU4P7Ts4AevkV6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGZdq4t1Nn94bDN7vC1K15E499zCTGT2S8tggdoSiwod256jUA2LRCKZe8qwiu2cKW655PrQHKQx8WGVHPXY8Mv",
  "key1": "5XNN4pqXSRSeSbygM5wEqXVDJBdQaAHrPzbgsrvwUY5K5WxmASNgquiPcUTZnusKthYLQfbT8UPpoHkLMGmL7RJx",
  "key2": "5vLr7hB3ofhtoBiEUB2Taby4K8nVrjueGNjxPVYmwfvDtbFVK9Z84gj4g2ju37YbvJp8SytuiXCp1dPWCys35asd",
  "key3": "3y8FvmkqQAeMairBc2mgbzmZoLKNA3ekxkX7qjU8UA3DVyeVXKdWYbP58p6LMEi93FhpSZaHpdGUxLcNDdtAmd5k",
  "key4": "2UUEa8znskTese29eFgBnm8TwGiyVoSiha9oqiEKfGd321j65Rirr4xDctPZiTaE7USHCdKy3grQ7ypBRJM5UpAB",
  "key5": "4jNpsf9ydi5My79MqbmdY47TqqJrYMQAqdsGyNxF9mgFPMZADPmZ77JzyCCJNu9EnUn3f7GZRu7ZmYKLM2BxcmG6",
  "key6": "4Jxz6VP2FxfdvyfD9hiiwom7QS6LxNAw7XArpjgmc4FutBZgiHggckSg1REic8LNT3jKRKNsx7bUVDGk5beMdpZi",
  "key7": "618qv6kMDwwQovE881pWMc6r3QSZazi79914GpVhDKJNPzSQFYBQUxninUdEPZUT7mAXkZzpkfuigyS6A98s91tA",
  "key8": "3sRVr2KAR6NKUXVJZ8j5LqUsKWYBszb46DjqM9hhFVFSdfXPBvDWBJCNnUkVTiM3YbH7u2P95zT4ZUSahLDStboD",
  "key9": "2o2awGuTgyfzcMDGkmPtqTGzciYHdNHuM4s8bShKtVuX4rtyZVjKQktceHvUWgbw2cSFzYNzxkeer6bHTvUQkUhx",
  "key10": "2dUKHvSZMWeWyQFGFdvJoZAcjUjqURZUExmd5D2NU3yQxrKA5BS3WDL2fH4WRq7wAPERSm1FT9ADo8iUXo4Pxt2T",
  "key11": "PVjewngcA12WhTqVe75nj5EnKgTaRo5BmK6yB8LreVBor4aCAJiTyrNtMovfEhuvG2JuF5BcQDN58tgWNoCk2op",
  "key12": "5akvMXmGv2Ev3zMuSjcBuVVdspdSnf1y6zBccMn8bnGLSSQqtwTwAXWLnfBQrsMzqHfeYNMsuxsxJocUvDqaPsb5",
  "key13": "3Mmv3WbQ3zvraJZmnAW8egGkJqRSPSMKzhCchNDHMt9H9pURZkWeMT6vFvdveGqitmSSwWYF3Y6tDQagqj5eTa73",
  "key14": "55q3jW1E7mhoUJUmfHKTpHReE5WSSa9nL2uQhLuQjTog3BATYSYuLqvLdCrZ78jE2WYTPD71rG9jEuvapNpZvwph",
  "key15": "3v2LrwwKoEb3kL4xrQiMxeNH14WfbhxWSBG4Xg6qa7BixdvQMfhsAhaq4BHSkSQQYX57sNyV5JdPA9vEr7NuvQ8H",
  "key16": "3o1U2UFXQnxcsdsUN6JYvWw3KKpZUkGsJiMRgk25wG5LF7mt1SBNh9f6PtXdKeUeiWeUzwVkZPuBiHUNbso1D9fE",
  "key17": "5Qd5Umdc5gSxND9ajhVb7vD1W4oTX6TfVyn74paLUDyRK6gcRexT1dEAR4ep4zg8mzNtjsHZdfKTnfVwNttHntkc",
  "key18": "3CTKEzs5ZA3KPABbu72hUBRMnT6ZPhTMkWdiSkoVPAXLURg7BS4wNtQrMFgk8QixbJWfL8hCva5hrpkyFUTmRVWy",
  "key19": "39wcwowwLAzwMtSvQ3gMsXhTMFvTan6ygUXeEwjQcqarmsJcKg3LCGFMNxZXDexLZbGUTZZzydmAdFWLqcn3AgEd",
  "key20": "315W7UCX7Sk5WsUXDVLHYpjC83AzgQgcYw9F2ECBKDz9gj9yvTKFhtYi858KPKKoedbuyUcohGfCJg7nHUfBUQDz",
  "key21": "4HbXwxUYxkWQ9MgHAEt9ev1EyPyNL7VHtCsi2B3TAqyZiYUdTk79JAeXHM1z3ERYPBjtHiKLMCpXiKAdgRxdM1pQ",
  "key22": "5Sp6TrpvXLFzinb22ymryvecqhDs1MEn2EXmh5zHvwZFtooyB3ywRofQ464jqX2u1SUfPwrJpUDLZ3AaBcqTUbPZ",
  "key23": "ME4FXEhmj962Q83dc2H2BRHP8syuGPMJ65a3BY8Qw9WEtDAbGFWfReaUcY5LqqYXLSA4Ud4srvFrm9F7C4JZ9Hm",
  "key24": "3Bw5qpQZeNRNBswkunQTpwTJV2uMsuM6pVvf9vLHV7jRoVGHTnsmbYQ5eFJpB1L5Zf5StXJsAktC3gLgaWGooE7D"
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
