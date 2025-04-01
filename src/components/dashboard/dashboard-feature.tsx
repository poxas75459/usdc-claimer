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
    "4FXEx8bPxC2GQnUYUhGSwPB7VwLN5X6egKG3AdF7EkoHVwGUMtajynBQgkAxMqnDvzufWTtStDeUiz94wYgEBxyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvYbjbcVFNfam5JJP9xfhVRRrwX7BHctTwfPBzAHew34bHhYhbRcyEZP8choQzW9aDvtH6LXjRpJwzVMJMhQx7F",
  "key1": "4mQN1jBSuYNBMmJceYssTAJNuYVGKLpgSDQ9MFDsHWDHFSx8Ua9BsFr57aCgw8aryE4mgmbWKWLZMgnij5iHQkXL",
  "key2": "48cAb1pPga19eiUhnwPwok2raJxLzA2GbPVLg1K3MkT8iWAtHZGi7AtCK15GDaFdXydPCn84iRbbyPnTSGQr6JVr",
  "key3": "2CmKEz8hc77U3A8BnnvoeaL9xNJe6rrJARNnqa9xgULMG5kog7H567wa2p7vUfgQEK2VswSccv8WAXsc16KM5dd9",
  "key4": "3j7Cnrt2r2eaYwoundpQ47jrSNawW21Q6VKTUyHb8QrvprV9gHVnUtyv4gSJ1eqeYctz2cyyk716EjcMZYsH1tNC",
  "key5": "5aEXtTx8pazWSwiZvnTohntVCjG9nnRXybjqUPxzf27zCKkn4dw7BaLT6HxCHopkgtCFffUZ8ggJtuqdzCtUY8FY",
  "key6": "2WM6iYoKQmtacL8pu4LCwkVcGYueKBh3ASchnie2yS59t3J3HqwrHwgjuFBGEA4Pz7u1m6dPfU29dZp4LNQYCxYo",
  "key7": "5fQ4y2Q5VuqodkueoShxmiXXqX97zQPS8w39etMpRMXSjCLB35K1eiennuVCAiuuv8eyiEEwrz3HiSaRpP4NiPHr",
  "key8": "3i83Vn4Dp1NXr4kJFm8kXzbfyvkmwxcbzWdc51sr67kEhYu1Qtj1wtXKDV51VHC43bdWzTwCuME2XwDim9xmyF6f",
  "key9": "4fieT9e5wCQ4R19TU3erSoZBv3LpxKs4SF2j294LBqtBP8WB1dBtTwks2ELRwcFsRZnjX5nz9Pi5ZXhFrt1KzsJx",
  "key10": "XxSjhXiCnWmJU72Vw7jcx25TXJbKcyxwZSp6khCUqK3JkXgHv47k5AY93rK3eQ6kbSjTMLJjd6wu6E9kDy3x7dN",
  "key11": "3hoYiYaW7ukVgXNmvZfof6sTEoge6cN4AxcPWkWy3Qchuaqi5MJXfpccrPwTGcFNrttAgvXpEyFKL76NcWPsVhp3",
  "key12": "WqEHqnPKzrchZRKV8vDNJKPMseFW1QALQTJvEwbG3iwx1kodQWoKDMua7gzuLacxmHbDWEeXpQVNaWkJWnmnzTt",
  "key13": "2A5Cdm3io9C2JyFbrH3cdvQMoAktXuaQyLASUUKmtSg45383ppd6b6ry8sfTMBii4k91XKbNM1jQaLP3E1TLwaZb",
  "key14": "3HW19XbrT6FZskCxmNQMjLMcZPtMdAe4tgqC6z6a9bShyHJogzAhEeok4xEEPGnRj1FsVzue2iG43t2MhkkwYtNW",
  "key15": "3tFGoVNAKHXroWd8KRp66hg3hM9m6DBCY8gTMxiiCk2M5rBBz8pmhmzVvrBwg8ZfsrRWHWCSgF54MiJRahaJc21f",
  "key16": "uYgpFMZBwput7jH9keFQcBdvFF5coeAChgRARQCdAsxH85chfChfnasSqcVRzyuSMFYbYBWTVB6YSx2EdJJuTXX",
  "key17": "2wR1UKbg9Eb97Ci31TpKJuBbGPXqMWSdiu3xenz54VTHyJYwnLT3DMshvXXts3a9A1Z8uC91NywgF1daXsEYPGru",
  "key18": "3Ry9iHNz3m6XL3FvnjT4tiewR3t592ZyNbvyKGiiBbx3K5gm71ErEXptKddnWQCyFrjuFcYrXHicw6sB8Nf8ZDk7",
  "key19": "5K6nP3hmYJuVPWSyrRAQ3g5DyPWX3Shabf9aKuYCgNWMAinvAEMV3Zc9qAthtZGGhi5FE3i1WJHkShtmq93g72vE",
  "key20": "LQE49gbxAfuhgdEmp31M5P9PjrBndtEDNVXaDSqducT4PswPzvwjv9KooHKLNyQLtP8uHc62FvKLLDYDdZcCjRr",
  "key21": "3Gw1FYs46msD6CG2QxWj2n8drzhG52Dv4HvH2V5sYkQFYLJEoZYBSp2sUh9raCHJTTyMvQsvhN5wL3WPivA47opz",
  "key22": "3z6hZ5wGAy15DdNuaQxVpKCYmhwqSHtMKAktYgFePBHYKMgqUE1zKkUXBmNxF8o8yHUjoodkLMYV4PV9hUqRrkWB",
  "key23": "5gk7E6VTVF7kxDzHitQCRGtgBf7k5CGzS6RDUponMUa1PXyZXkPqBfkXc6oMekJ5kBQKuAjNb4NqMzAx3UPh5jVr",
  "key24": "2txNQNs7BKy9RRwwnxTWhbzBeFD25SaEnciLSt97sTpD5cheGZP1VTHR1YE8ksEdwmAJNFYfxouc78VxKDQuYueM",
  "key25": "23fZpBAA3BEP5fSUdMriBt1fjAKu9RNSPZ4HP7MQ2rHXYxxHDL7YLXUooCCzXMvQerLaUVfz7cSkXQCGU6o4G7oh",
  "key26": "2WMxAroFNQLYEbDkCZzTrTS48wWRxaGjXUHuisQhpsW8bcZBkTzEUXGgqH5JqAZJUtrBRYGqjtG2M8iqmqGtC4m2",
  "key27": "2ztPLBhTmHBHB1EfL5QkacKPY6uk7F8hh2vwN9CXgMNYGWz8937UBHyN5ogXuF8UKmg8qrkoNXYX5gy2AQHecoHt",
  "key28": "5jaVDPMRXo8aEHn5DxfdUSHm1RuFGYKkqtmEDjZBTuuEpNBmRP9kVxmtgrRWfAGoZcHrMjzA56dnUfwG38jS11U3",
  "key29": "4yUSBTzA1s3ikoxgjCjS8uDF1ESceamzTk3dmFzaCrbM5GW7G2Xtf6d3LpUPwdJtRBxdVx1QCAPW2if47txscKFL",
  "key30": "2Nt2qcaYiqkbjPdXGkEryY8q4bMSpNzHLquCthfcVQA2yiLSsg85fRenQzTjGknM8FukMTPCVHSVaicWxUG6zvec"
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
