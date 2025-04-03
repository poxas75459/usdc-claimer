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
    "5zH273zN5aRSqtfaEuWVP6CLF1eJGiDRvdYViX1VBaRJWW9Fai2PMLK3uZRtZMAEhymLCjPth8DhXJwLNcs8hjA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmgNYkk3in84ioU4eGv95KeEtJcKJTBaJFEaiMG12U9XfRWzX7owu37qK4617LdqseBntDCUh6tCHb2aXB9DpRC",
  "key1": "5iPFTYTZKsVNi7NmdVLko8XyK3vUMh2rPSCKPYVm9QWuDGBgmscd6adddRiSetFRLX52i46NFwbHC4D56eVuh5E6",
  "key2": "3Z59BBVPzNPxEJUqzCR3x2Cm8S2otVvbpcP5UjLqJcpFcAftMdszpK4gX5o3KUXqSPWdaQURQZ35yMmht35okLzH",
  "key3": "2B71DfVVrbvzhRQNDWHqKmQEeCZWRSNRkebi6i6Qg5aaqtcuMjCx6nQH5yAoti9e4oUpkrZKazG4KG4LmeqJzHYL",
  "key4": "5nNiWKx4ob9DnvMo1rVF7oZ8CVt8RJCpeA23XgW8GNfHAL1NQpNYDUBaZ2ZQb2b39LNBV2ZHmBoYmwMDdp4cNGY8",
  "key5": "4akF1ut5tEtqy8jGZCBTvByPFdRBH1MNKpNH97Qf47nR19YprPVVC84pMskobHAFqbHemfXMFTHLd4jG3Vj6ZwqB",
  "key6": "HbWLWdJRMTxJgEWC3CjEPAX9a28SsSAEPMjAbFewTn5YiKj5tWAto1U6FQ1THiQaewJqDb9QprAG6G9TxP6jzk5",
  "key7": "3N3dYnDxwy327BaDJTKamx9sdRPfam899kMC6NUyJc3tbr3TSubLE88cTSe7PtpB1zwrU87J5ykvoRja3hAfv3QL",
  "key8": "8xYUTgp6f5xa8bZa7AtiJG5WP1kTVm4Vz3vSoAQp313ARfmuf5Qipga7gTq8oDLL12djpNvHsby2R46EAzPDY35",
  "key9": "28cVzn5nfidFMqrwDenaYwcCp9CpRpScvBN2ZVqW5tRrkixUTMe3gTnxPDeAP8J7LgnQDcZJcTy7h4oahrRUirov",
  "key10": "fFL97FAVh1dv52fKYQhLdGgY7fpWMRibrMERuBRPDjnaodZDu8fbPHpTY1Uq5HQKbvnABdaNXyu8HrL4ofKU7Ny",
  "key11": "427X2dTtCTEPA1wxfZ9ELFgqzP6MkUrnGxKu1mfPC2o9kVNgrQFFffCfG2CDgsxBYs5fpbafrR9qRjdzXZd9qbF7",
  "key12": "61Jb3YcTm8HXrRSkHoFFhGYt7yaWg42VvDTPNQRJkGyCzrf8ZPnDnEqgszUpjh7uv251NPPrhKdaMPVgV6HDXVo1",
  "key13": "2WCTvQ37fqiU3VU7em6K3EbeanCPBxM7jC376W6pMrbGgeAr3WB9Ra7GM192ThqjEeeTAkdD1HvPtNEgfrrvfA4a",
  "key14": "DoQwBT6ZahqHbfmsHTbeuANt8EdcTDMDLxCisbLCJgaN8cnxR88CYbpckGUrFV8XoupWRBaGFLzk6S6hByVKA6k",
  "key15": "4WWYAMhu2TwhjQWgBUGbBuM3JC7LrAsKZWFkSvcmMAH8xVdtpWSJ5GSV55dTYAGPb48R1xrgkNhv97cdJ4XvMt3s",
  "key16": "5KijhT2ksbS1Lo2d9JnRzqArZJXJERKZ8giwRw1taC7XEHCRmV9VK6HCwFV82dAVxWXkW12EmAysaUMC2JHTzprz",
  "key17": "2CLxNUBejdTMckjxhWUzgoCuNzFNx7BoywKtZuswRDZ59Mjb8zK4Mg9GASbYx4sG5AgedbC1wwrJsWYAYABfXwad",
  "key18": "3gMwJdbQfnVFsHYcxWEcQc7Uo8r5Y4eWwDjDaGaBDA92jT6GxXEyRAWbuGBzsmHDF61axX2WrkazMkQqgU6m4K3E",
  "key19": "3xBXLoPUi6kMuzesDYfp48yAV5fJKDr2svUXW639A8JR1Qos71Wexsc1GMCcRVsbaTfxfzPTs1GP2xWFmeymfnJD",
  "key20": "3q9aJsqvPfY39wvnxZJdgRMuhipLjmPF8iqFzbD76ZSWeZJwgQY452LqMtpQY93mJMn1hd8sAkHv9dx4SGrPkwun",
  "key21": "2uzACkGG4w2vd8mJzytGwqVt24FiEjdngK3pmSSCiBmY9y8pYGLvarv6s4AemADCmRYoghVcQRqE5wURZBuUvsjk",
  "key22": "3qPGLoyvUjYECnByWtrc6QdvGfk9PmgzQxHLrMoBEscnmh74zuurEb7DPQC7gdS2gW6tPrNw5dPUYpLey9gyYPeM",
  "key23": "2imoy9aP2MX56TsaZRdc3bj3iBKA8tiw6GBsbvM7wetmRDwtRvCSAWuuGGnNgrckAN2FNsBLoWCReBj9aTMe5mbF",
  "key24": "8hcMNExRVkNcNHh875tZZQQWgT8q3rcnTgGCmiozMkdWr8fVz4vWfDDz8NZn5mUxGeLKEEgm2PA7dvzx7mEsjCs",
  "key25": "56z3SRPbBDHmKP8dPhUPmvHbzFXzrhw6bR2rdmYH99SmGCry6iuEjk7zn4pvxqtdBP8B1djLj5mRPcYcGbQwEmMy",
  "key26": "3sEfVyGVCYR4pESRdnUvVxspAGoiZoZcke4poGqqRvomXbBjhZ44KMDXKqWXNaAJFk3JQAt9xG7PkjcZv3AzUev1",
  "key27": "53CYeWsCGs8YiH9VPBSbkCq2M15Wq457wc6rZrgpyofb4bZrAr1LUJKqFMozUGZKEWH2LQbYzBPNguUAQXyLT5kR",
  "key28": "j1cnAKZ9zp9MZbJNd3ZepVgqSCdnG8WK9X7x4QtwHxS7MK8fTqzoTAmgAkaksVeZavch37RY1pgiC5b9HyevEHY",
  "key29": "2uC7rQbpbGUxH4uzYKW6iZTjBfKgJN9RFFoJjod2bDKmJoACpXFxFvwsoJsdYspdv6NZ2tLbofTr9MBTBQCeejnH",
  "key30": "3147vennCMYRnNeprHJDfp9NDy2p6mWbE3uAJWdfX5iv837G4QVFSBNpEgtF389UvDa4aK8CJCiNrwsdYQ4pv3ag",
  "key31": "3cqwLLHSNfWnzkvZT4yz55GuGruozqaps4E5CUhFpozf11Snq83dDT3Hx7fF9qyAJZ9vppLkfHXqw9iDwrzDTqL1",
  "key32": "66Nk42qhJwo9CsthKrVKhfnTWnf2sihdnYXaMJba4L4u1GN63kGnF1PHYxZJAQrDf5umvweaJGHS9HYhCCebkeHh",
  "key33": "59SRrgYV51L7FShRLh2aRTPgjUiYJ6WNbFygFxEjgJWKXjYqicFLh4nSkq2dCB2YDCMVmm9im8fXve9uhADrqhe4",
  "key34": "4fm5P4nMG6AhVzJuFTBQ9VomLKN6SXDySbkwP95DgjQHCt5Tn8yEzjuHCeWcFe4EduRjcy8rMEoaWcBXv6vtEB8e",
  "key35": "4eewBCVhwezo1Fj6bdkAPiZoNUHB5oXYRGyHBhTb9SyzLJYPYHKwEFg6cAL67gek422zz1n9WJurGmXnzmETkgc9",
  "key36": "31UPcXkBmS483GmGDRNDV3QLe6w8Ctk8D5MgRKhx4JJ9645VSubjVstwtU9DR4QLupngyK1AUyHHwqRXSjwZvubZ",
  "key37": "FZW2Eac8DFtdvWq7vs8CQjm7HR8yXu9T8ybBPsyP1e5GdN6FWjDAkgzzTtXurpsvDwjAtMdvCCFLrdeNcmCAe8b"
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
