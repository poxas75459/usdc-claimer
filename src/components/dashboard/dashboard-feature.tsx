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
    "5kctEL2H9Ak2xVX9p5anPp8t38K7N1p7iUEkG8Tmb8iHBtimq629fUxg3cSUcA9btqddBzDW7an4fMRQW5x8c9bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aw6mxcn2TK3Soo19eJGdVJKibQJjEegTtzf5Cr2GzyJTesLRZY2AswxfFdjdEnriDrf74EPZgu4VdLfAU1R7SVH",
  "key1": "2KBMiM4xcqJiySKrw6NGuzyVTe5ERYxFLRQ68Qv8xawJDBbamiigbbjvXh7NgMopiuDVueLXme9Y3rtEk5fjaMsY",
  "key2": "5SUeNwbV3es2yuZcsjnFYq98uzC2BtboeGr2r6Ar1iP8gYjGtcihUoJvXQnwdVnfzXTiUuUbY8YwJvse752XZJMi",
  "key3": "4ZUDHntymhqrxBfrhrU6c4FCz2Qst1hG4LURhXcLvya29LMW5Z7Z3xFpojRt2xpAbjHJKg9mj3puaKT6bZw3Dya9",
  "key4": "5kFzXw6a1aH5xFKfQsYhmSo584v243YYWsrXYptgLx98bJgqvnCZs43XN4gtrLcZu1KVBXeyMCSba8vQJ8nf2fRV",
  "key5": "bKCNEzXEnYBX9xhc4vUZeGqqJzJjckHAqvL1X6x4iKrHUuetKgsgAnhhe1j6ogddjeVHm5eXf5wqcjo8o55ay3q",
  "key6": "4USZ2EBU1RrkzpTZfpGZrj3xPfCVDW5sFkgqeDe6QXaGrPxZfLZ2Jd5RZmZzuPqvsQqzSN6GDQcFjL57jiD9peKZ",
  "key7": "35c1n6JdhTmJtDjZYHvdaJo1iMRvw1ZZMFZuELFA6qdJj4wkGE2VuNjJRjbDBiTsenynyCwomzdWEVd8iYrgV9mX",
  "key8": "7QzpuBckHrtumwDYVwZVGQ8izC6VFBh9EtNdHFHgBp49dKCq5VSG4PPRFDmPrTgmy1seVtjbHtbhupRpQqVSYA7",
  "key9": "5WHoJMZyJgrxWMo8G4E6sXVzTBtLG9eEMx2dStbXHGSMrK7hQdc9uFU69tALSiPxWUToZncGmYbjwkqNrzwpe6bv",
  "key10": "5782iNEKzX5Fe2kS2w5M1B8GQjkUChGYySrpnDwivWTQgnhahmyC8NxmmEUX2LUBirXLBEiity88N9GErWV1aVb7",
  "key11": "YiYABokfEWGR4dJ7Ent8XTaiAy9TSuPevQEQ6hTTSqYewTnrY2BV4q4Wxr3hge9cnqRaq4pn6KkAttqU8YTBFEc",
  "key12": "4UkRpQ86gZ5WurUVpbwXvqsYJrsiK3yonFVjeRwnN5hAPyqGcz39h4xP8YeDZbnREVFdpYLHE1qg3u3erSNfA2QF",
  "key13": "5HRELQmq8P3T21CzWMp6XCzHJU6rCwYAg57FFrjQFwXi4VkRmQvKv7TipnKRYKUKEqqqTxDyZhcmVmirvtDdCUiu",
  "key14": "3BEg2N6dt7Jy7fzPqY9V4oQ5Rv7ooNNAPza4Ct3waNA1snrpn9iNFx59SBnBfmiBv6tAhcrsNqKTQVmDtjqTCkdQ",
  "key15": "32UHVttWPSw35XAUoKjeKCER21YRiANTbjZDtBuKzpYzcMVEsaHMNvTSH9DKz2jHQtSdgeKKTvmBW5DaXVPYSEjU",
  "key16": "MMKUG6hviCWqgkx3GfjKVS4dTZ4Kh26rahU2E1RkgPcNMUq3XVMd75PvQrD4mDybYssTBFjyTGxJLjEga9EFxN9",
  "key17": "5oxdVp3Mb1m39EaQtZ2SeX1MzDngHz3cvdmcj4aRvHxX2gquDUDZsHuc81kqwx3hq2AHp9Ed5PGRhCzLdEYSHALd",
  "key18": "2D1p4BDx53SfNe2Qdbr8raiDAhrjGjEFDjFmtCk7FWoqRMx945LvuJT16jtxWMKicYFsZWBiGAv7EHf1Kgc9Wsjo",
  "key19": "3c51AucxUCjJ5fKARGkGK1mxqoVqSQ3wj79rWkRe1UsM9zkX7so3mzZ1TdmNfi6oxMtMZL31DJuV3gdm6cYeNVwE",
  "key20": "3dxK7YGGk2P8KSebdXhiRyEfYDNWbFLE1XT5rh4WD7FNMS2gNge9msdjys5nCrgtNTZQ2w87AusD8o7zSQP6MpbR",
  "key21": "53nK8fAxQP6dUou5Avfy8y8mGiAAwjQMebuJ5T2Q5PE3kVB7imK92T7Duq9trMMGqs8QppXAk45csUrYKFeP7phA",
  "key22": "3TXMEgNLgoUkwq32p6rzzZtyzXSEdNaVxCsXTPqFdn6xJQitQt46SFySMA1JK5oHUbWwprpaAsJk8KWubZPeZ2gm",
  "key23": "2DSCF6HfPGAJgipYEpCLX5CZMFdEjA6XZwFtjabCAYiFnRCCEevX8hN3NGywKK5E2FSxMKS1hTqyrEMNYPZKrVF2",
  "key24": "4adWFWk9aY5U9x6UHNWmQ5Avp4raGupyPz2TADnphnz1vKspYvHrUbKgWZEy2DA94hygr6Hnfo9qmzvR83aRih1q",
  "key25": "45yGV6mvA9xjYoNskJDe1QzJdXnYvGaibr6syDCiQLPKzan5KdW6ZZgqeYqhskvw3wFJYuKf4PYnyJcqhupJJze7",
  "key26": "4xvYAAsiXVAQBTyDEzDS8zMByG8X1NR3rD1Uo7CzvL4f7v5QYLnoG4NNVpKNokD3oN7Ld93heKLeBxURQRC4KmQG",
  "key27": "3rptU445AcDsjb8XSPNWXWx1aVLVbTcPJ7bPWbEEnYB1bkNoAy1Sy1kVfTBxHtN8xgTo9LFYkEscczqHD2cVYe1y",
  "key28": "g5wj7WKqWpLBxq4k9xnBV7APtT2tPvXTuLMHNHk8EQT6irLRUF4PUhwrSX2x9VLg2PyzW2qauarnZ1fqEeYfZXH"
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
