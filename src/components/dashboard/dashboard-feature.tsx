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
    "2dS7PFgDLd1ZdSEzxpTE1rACmtTVKk5zo2RKqjW6TG73V1fcj8bSmCQ8SyycbzWeNpXmVgFoowj5babY3LLkcoyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5723eWk9YBtRRdEMXoiHqK3nJ427d1VfYRHcVDhNBzZ6ZqZtjwQGLYP1bhwmCpqR8rfcnuA87evPro9q1dJPJpRP",
  "key1": "gW5RFbVqbzEqfR89zFaiYymB6inurUckBCaNUdpBCyyA7d3Zava4owzfX7kur4MKgTWVPx5eaZ2ySA9ETmnrsWt",
  "key2": "3fWkR2QvCoE3n38i2vyrASPrLS4YKcdpxpL6ExBb8UEPN8vKNAb4cxHYxkEHgy4awgxBVcRK6VTGuqhrZpyeLtaY",
  "key3": "2nXLBSr66u4Sr5Q2YRS9Ub9syb1kkPaX5wYVY4APEfKbkbgp5wAfozDQv5hX1HuWkuRLMP8UsZwBoCmnGLshhJpM",
  "key4": "F3LQPXfSTCgrKjPdeMcp5w2bkkt7jRPsN1YZHHqMFhBAXrpPC3D6nTGY2sdXUHrwsuqXk2DnTwZ48JqgRSbKAvX",
  "key5": "5Fa1ux4btjmGGDhdcA5FCtfxg9B1xLo9zPW2VF1Ky8z5LtziAHbkLs7CH9ChnaacYHFXANyyuHojZA2hjL3qEaLz",
  "key6": "3dNQ1WTGU594ornpJS6unBgjMCHLgfjExJSvHpg2qJizAXPASGGhH1ZLrRezjMxkGEe7k4816ZpnmiZm8ZLUL6Dr",
  "key7": "4cmbe1KXdBicedHpFcyMdmLLtDzCvJMdcvrqK5owhzViWEnhwfY31wnx8n8HTwKgvg5K4UMisSxW2jNmW7KZbzRH",
  "key8": "2V22M5fEocEwDdTyrnf9hSy4WqR6L4x21Fr4tnYHe5sAHRMmLptiS5FjvcrezGBFXwStg2i4wg3UzSRHJTdYwx9k",
  "key9": "5KV9Vy3jm7KtiU3fDZyKZmpsjNfDNamMn2abvcq8xhFvscDYSZR6BWixV4Ws926U8bMk6CjKpPGM9ia8C1iziTB4",
  "key10": "4zM5Abic8ksKUEFZbWpihW4T135jixDH4iXrJ1khP5G1F9rUMaP5WmPQzfwvr7fMh4CbRfWzMYo1rsTur1zBwt2G",
  "key11": "5LVWiiA1X3Y2PcBrTU2MaBjcRHUJaTH8SJN11jy7cooCxVTDd3xDuFMz9FZb95JwcvWiosbAXrsa95TKcxEmh1dX",
  "key12": "RVmLLZT4WHd2u5QasBk4yhg1TBMYfYNxdt38A2FVxWiiNgeyBwkH57ZCcq9jb7tjsY2ZMQRpW7oTg4ac9JeQ1um",
  "key13": "29DZ6Z4pDudAoA6VD9J5xqR13NNTku1Ru2w3yoXzUjzhPrQPQsbL4kcG3349VHpVrkSPVZ4mN7WF4u5vsJeKP9e3",
  "key14": "5gcg3SGvY25t2mj9quyXXNT7RVQSLttsmMnUiqTEqBFgtcpsguQRC9idhcqHG8jRfcWmgKKyyBEkgujE4NDQj4MU",
  "key15": "5v5mJdt4CuFKNLVTm7qumLdg9QD3R3KpVD6RLUuonJtryHAjtZb3FTuFEmb5c15cwZLiKgWu6oYe7VW2PpB7qbjh",
  "key16": "5zZS75sTAwpZaUVV76cHxwRrH6coSABCu3cEjEKKXdeHXexswuUdBUbnmm8J1LraKjTj5HyC3WEpzP37S6RjMVJN",
  "key17": "5Bh5azgs2HBFuVDaHHsN3jMDXYgqit1yzgG6yUVzeniV2EeU3LUf2wXDuBTXxJGsqHJnq7bM7FeDFfz4mJV3uKoj",
  "key18": "8gDchq7YZGiFHbXHgsMjws35BWcWrJSvLPQjVC5uLAV3jzX3fBRAUJXWioTYGzrcAbwSefCxthEzUN1X13eAWks",
  "key19": "2bpZ9AnUkcZiU7uuPwpdck1gtitKJCQ7CbanrS1zrhDi8RDLVQ7gNSoYGnGgmWXX1KWgXjWCd1inUsDPH2FRRkPT",
  "key20": "5jBS9evHbcx5E2jbjUrG73n4epvbavekYjR9vBVbCGzPZg6uHs7S68FbQKezRivY8aeG2oNcfiMBVTBbv7DUVsv9",
  "key21": "2CBuYZp3iYLfePiy7Ftu3MtJv6ct5KrXo8gzXwvUhjrCtQL3TQ81TazNFpyjnEJcGoMXdCrM4oEg1NuWEt3zZWNb",
  "key22": "3mP8QzZL8jnizTHcKfPCkCYXVJ6hQknfNmA88NkuWN4X8X1NkZYYJ571Wfy67eq7954nn4u4w9uSsJPFa8MFU4Xo",
  "key23": "3rUS4YvBBpckuA8rUsBBGtNktN8RM6mPEA2GA2vHP4p8HMkkSzw7sVzSsydA4FfNFLxJQ2GLSVWBwBJT6NC49MGj",
  "key24": "3RGyRd2v66pKxGN2Ehnw6DYpQ6Zf3g62MkbYirmHW3SzAzcqvEj97TMsVDMzb6yH84jhMxLYXKR3gB3pgZyQjEez",
  "key25": "JzkyqZDWpyJ8UeNALdCCHJE3nrgg2kKENjbcsknoGgPzDqLrZkQ26KHhxAcSNLiJnmeZ3FNSQjVpNQQoPZ2m7o3",
  "key26": "368BiX1Hap4jb6LZxVHUXb6EK9yGVHsJNrsFm4agUTPXHh7uNzoxbQGRAeiEEqs6KD76hq8WYYjCVdA9nP7x3pjM"
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
