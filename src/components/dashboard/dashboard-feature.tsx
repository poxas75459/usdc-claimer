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
    "3U7gh178hGGaYrmHXm4YZ3PnnJ2oxXfee7pbcLSWV259c15wJko6TAGtraJEpKv6FaCkaX1a6RuWjDkCx3upwSjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whu4U2vvz9PLLbQibTeah234stDtxd4FshTDPDesiaTTKnjhnso8WQpuBVoaySN7DTiFyBet2huXeVUy74byS7K",
  "key1": "4bwDNcUUcZPGhBaLuXq4UuqEumCqxqaoSfxHwtSJ9znJoMfEVxk9BfMuFXgD8jpiD2bNXXhH8BAHJG7kMGoEVMWZ",
  "key2": "4VwgAJu5YpWLkJyRnWz2oac37wj3Qbn5rpMpVjgcc7CsKJSgkxhSnQdt86n9dVcypGhiLhkrwVeyhj4qiCf8BXHK",
  "key3": "2iQ9rVDVaL9Wmvq8UPF5vu3MsuKaFbN68mbV45nZtBbRktrKgfZyLxRBsnMpYB8V7rWwkWW2TymnzHi1vgLPCZkK",
  "key4": "5xXxbVjHi28BYoFpPhVcuH6DrddeygJqVjPQvEpQV2P6ko5iBTS7AYNQTcdzWpPHnVCSHCw3PAUu5xisxDxMpjbg",
  "key5": "33sVuP8Lug739Z3pGvhpG2D4YRiUrsnUUptfrtwGSqiWA1zMKCMKudNjMGoav5hk6zCRFNNGgAuYYaWSNzRt9GJG",
  "key6": "5DPKxvD4YGp25at38fpmuxLJyR8Cqef4nxbh8vUkUMDmVQ61RD428KLVuQQdDjmhHF24BKVUc1TshKxofH1ZaZq4",
  "key7": "g9bDGFnDbCrydvJHXXmBDR5hdwtLpHM8BbGXjXte9BLynLBbXKkax2SRtqtq8EZuwdQ6a2dqw6f2ZoMdySJKdHa",
  "key8": "3hyYyGMqRMLYVpbDVNZUmyriPKWKmJ2ePTAPNQwRRaYTnwsJ6BFgWZHbPSQfsowc9M54otLhwz1h2goJcaXwCNPi",
  "key9": "4vumyiKK54RLWe7rjR4SFScor52xiF4trtSZgCS1foVwSn8mANhFSJvs7PDmEFFb88RC8KwzKGGt5aDBd7iuMxbj",
  "key10": "2FB1GLtGUzaeu7mRVFLNnZVxUC1U9MFqdSUtBJA9ARSDRaKKwZgfR4XEUWZpKYUWGniZi1nm3S1yT9QXyDScCtNL",
  "key11": "46r9GW8T2ErDPvuM9N91QbrPpQEmWQttm1az8n53ci8ynoSgCVHRdWMGHxSJwJmCm4AL6uhrDdY8iZZN3xtQpwjd",
  "key12": "NXCe9LfyiRFZ482jCP6cLeVgnP7qVgWN1rHb4brDKM4jqC77MsSFnCnSceUgU8hLYPUkPZn4oeq4kBwFe8ykP7g",
  "key13": "aNMF4RwKqCsuMcRLqd2UbMjYaZ5NVtpnVr4xG4hp3Vey4qvhxZA8HEuVEvuPbgvDeH8HYbFtk27L8TeArZrvmKA",
  "key14": "2Tt8rs1bvxg15Dsp7DQuDU2uw8koGmMucMiCwiBiaRcfj5CUBTgTGjtQRvzveXeXtB3j97unyT1D1isaAgSBrZtW",
  "key15": "GQNyBAkG28QZxw1e5L2u66aganAqnMwxqSAYAoyrd5eEY5mReSfVxu26imxDWVBTswkDJ6LPH5F9cUhcW833jBX",
  "key16": "pDzzSUbFbehKMVm475w7JP2PtR8kzcnrvsJyxVzZkomghqLWQUEgcfRgRD9QT6PP2NN8gXH8m6vtwCcG13oncfg",
  "key17": "34EejyvAmdFQcYL3jhH3zJgFCLM4yoen9KwmGt5EWTUbg7qQV5zCqMrx2qFL2CHX8jHNq5SGBFxD1RPTsKZ3tAe9",
  "key18": "2XakFEADdotsvXRwAugmvSU2mdpfQxSuTscD4BZgemmJcnaWWSJ4wpvPcfhmwDoFJZvE5s3qumFmt9Lk4oaRqqF4",
  "key19": "2CphQ67Y6son8U8gAMFGDR6VeptoVQL7JGaxB3GjJa3SorZqWmPE99rFTYzkEdHasG4X28BKLZvMXU1Z8UGWCYgP",
  "key20": "2dpGeSL43yMF9La6nVk1zuBNWEfWr23MYRaahmqA9UfaAjGjFpd3qAYTLgn8Ezmo84qmoEfGUr6gLuC9CPnvTBQh",
  "key21": "4eWruLkmSUrD71nLpufFyZexmiGEkGKJRKH6TBeJxXAbDjtYt9biA1QkAgf1ukcXfNqAx2rutoYkijd5oKCHGfee",
  "key22": "2pG7jFQZ3CejuAgUYbaLsxMBWNBvLkD3HVcafMhqo479bDwC3F8t8oJxcWL48qgSiSyvJX8hkGaU374Q3q2Tz5u7",
  "key23": "2gP3YPeTFBWb54xwD9WHbVFVEYwAcJT3vngFHE9ih5ShjEHzJxWxAxoLH3Gt3q9PgQFAxvsGJFV671gjcpsWVnmh",
  "key24": "3aSagTuD1XDhGK9u7SMWa6ndovNb2bbjrsvpYPwEtvkBsG6smFaatyhfUy7FrHfGQ7YuZBCbmiG35WQLx2yRLCAq",
  "key25": "2TuxrxqhWNnjDorKy8kMBUP7dLZMQjpQznVBeaEem4Sqf3aXitt6CWAmvLpuptpZArDinMrn1aFSnqgvPSgicFtB",
  "key26": "5ADbUJF972dCA4yEnV6Um2gUTCSxaBqfC4faP3trort7JckZ6Ru4HTrfAkHeychmcBtHBUvQriJJTVtBfnx2phpT",
  "key27": "ZQa5ydtpGZn93UEHaoHYw9bqVTWw6EgCn3vtHKacaJHHgmWS5SqjpkWYVDKNuWPPDMKZGTfj2sBJTG6nAWDnehK",
  "key28": "5JHkUMfsULmbuJ9JqXaAvxeQS5eYhY5RS9iLFPpThTd2n9sqf1vv4yeth5oB5pkHzyb6bD1CiqVEDdRNwZX7o5NP",
  "key29": "2M22fANPGwe6rQV2DTy46WFzE8N2UBCUspNjXdVWb3EAXpBxdwGEYtmTQfJZ62E6rsjik4rsq8FE8YQ7vTx53v5P",
  "key30": "2Hqz722uUxmFZjGcnVLtVmxDZPyKaeXBFM91w9rFDpEM1eL2SSeMR1kswxXZrsjd7qio6d56U2Bf9maQCdxiuKjw",
  "key31": "wghT3v4Kapi2kJ5FkZ8z6NauYyweG5H87aDaZUpQvCRJMtgNKEaK1BHMgMaqQHo5vGprXLRAbhYcqcJAZUyg84c"
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
