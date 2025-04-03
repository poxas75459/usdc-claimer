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
    "2rB2JKX7jAxjwJTHcLwmzfnKvbKaucUVkfEEm71S9tu6n9tiXvz3XwqqV2ofBhqAJhhNjUmRwrvJApxuRZoSTncB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAsZfe25easMd1nWsfmeDXjSmUGRj3s4fm7nMWPFsXU5tsBgLSyRuHmCgo7b8wdvtsN41NCMS6F3v6UqCzMcTBb",
  "key1": "49g8qVFxypcUaU4EaXrEkUdi76AxzbCE2J8vg6RHcUwsE3wTYmizQFCDe98NQgkNWoAvvVud1P6ATx8uEDbG66Mg",
  "key2": "4XFR5BdG3c6MPHq5dnPyiNxtaQMnvcWRhekDYaWNUMcyYvjbGakzhiJmDgwds5zby4FkUtUSZdKGQBW8CPejPK2E",
  "key3": "bCbJptbuYzgWDxX21i776enDpxfHZfQzJdgDZHBxwLzvTsbiEqdZFrt52ncvBVHGYzxTYViZztoBS2ckYGZQ668",
  "key4": "R4CwfQqg6L86JGyvePstfuwH7MUALAyZRwqzy9jtCpibnMy9s2rKyP7c4Zs6TTViMZzKVwsQCeS6YbnU2UNwuyx",
  "key5": "3n8UbLFXvxXnf4zegeThnTNxSo7QNZSvivd3PRzhxCSsyRz4K2jxy1mSY6purP6owj9cFtvXcK9idV6pUNufMMLV",
  "key6": "474RGh36f7cTg8pxLAPCJoTnu7docneUWgNqk1FiLRFsQtc9LhKn4RXSN6EDsBEzdypttvSjsJL5tBq4bRYjqnMX",
  "key7": "2SCs1tu8LTJDB5ZcdfHEexopynkt5RD7daauVzWPi4H8Fahsx68i6XkmYd2nkQhwm5JjZihqN1gkT3wKgMJRhm3u",
  "key8": "5DBmWKkdco5vyf3aLHjRKECpSmzCVCNBAxt7fQiqt4qrLaULbeqVR9KX99WpARjx5nav9pM28pNuuibCFBjan7pX",
  "key9": "4RPs3cHFrApJddXwarRbwAqN7SfT5DFkSwLuKL6UyUahyZNXKhVCq8w3du2F7Ajtjy9PGcKojrQ8h9e5GJhXokbP",
  "key10": "NeddNQebupa7QS3v2QcfW8aNTyKp6MPpYC8NydHxGwiG5hR1adinRzrQHPuMU9H6q7hg6QXmdqV7pJfWEs29tP9",
  "key11": "4jnZu4F9iq3sUQAN28GCty8cbHeS4GfeokicdFxE5mPHQfDK7mftoEcbE5srZ4uE7tuKcrUb834GrpwfyJYayCGn",
  "key12": "66osY7NCYyskpnN8aUaskMDMrQLRoE7a9zMLU1oWVDghh3kas6MmDNfFbG9VwQQjjToyosv4c8JQQynYvezenfPC",
  "key13": "66FaiCndHvMNStGDDep2sn99ATuX9yLodAgAe2QJ3E54RtGrqjNX4nShATkabdqUPJG2nPJHntyFehqXj7vMSaTw",
  "key14": "24LbLvw8KY9YQRgyY4kR7L8zEQFKY6j85GU9PTyR11ERiLY5vgs2PyBUCpPtjmFVk6i9BHZR4ZBtea3dGAxVnaST",
  "key15": "dQJtmV2xSjFCRoBRELn9jEHjDRtr3GU3xoFKAU5bbcaDmenowDoTMbsJZ4PN4AkiUxbg8KELJWdCsEWbHGMfdUC",
  "key16": "47NRqajXn6RGeCu1hhEkT1o214HReCH4PR9TG9NBraGcoj7e9KjMtwSsb4iPKKbr2kdjVeH5fVspy4zJCT1164ss",
  "key17": "23YaurtE8sogmewqysTAFphmREo5g4Us7Tf2inBkYseUBPEGhHUzbzq4ikof8Ta5SgWb9CbwDmZ4BpViwzXudjEs",
  "key18": "p6DUTYF8oGZk19wqwtxiU2PiXVZXncenGM5TnvAEBDwDsGGnbW1ijzWiYwcxzLFVZ8sbDBE9Pbpp3LFiyGkFmuk",
  "key19": "2dPSqDWUB6aSn8cAfRWSkBdXzdiRzqnkFn984jFnrdCMT3Ve77BAdqV7NpqWqL7YY4CYQ2qFJ6Ravigp4iRAPsGs",
  "key20": "tqn1KxHipBudU2gJJpRomdCtCgSrELRP5jsRBiMJjnB2gwfGQrfzDanzM4L82XrVkiWzu6PnwnBBnMrQeEo3Ezy",
  "key21": "2wkuvoPLLumHzqQ7UCZTzMoJZ3k6b8CCTFCFA91sjbpLHXm5GQ5wkEJgaHthJuCsKJyM5Dybp8H5zMjcbgmrGmLv",
  "key22": "3Ycz3247MtB2ujuYJgYVPnXvDcHQHVCF3XbpVWDMoKkjhw3TPimSGNroinSwsaAcXxaPETXABFHKfma279t9rGPz",
  "key23": "8TKKPcGP6AqsP6bphB4995igFrcHLhd7not1GLvvcZLpG1opJmm6fpVDFJcF93E8abMiYMSV7tteoqXYeZYJn6m",
  "key24": "jFRMPpKNnkrhjEqTrfkarojppV39irBE3Qn1WKCf9184AEkXDa1RdLMfGbghQ39GQDo1UFFCUou15fztoaTYK99",
  "key25": "t3kc4Ao5ENmMiTe78amphCvNktJcSPeJ6BBQyj9UocFLUXa7h3Tkpak3QkERPsP4ZNXaNa3Mfhb3xdVcomahQyE",
  "key26": "5NXSWSzzaHjy5e4jjLGJqa6jxpNXJBNoEp8LdTU58waphTVLLphefH4cNR8jxXk3c3U6hAN4M8KZ4wGtHYSDrNcU",
  "key27": "4JwgV6GRTqtbJ5Xwi6UZjuFiDag4bKqF9rAjdT5wGdKKQ22eSs8hinVARhmDa8hSff1NUKYzoEvPkc94L5j2DYTM",
  "key28": "52NZP1MKDqX1p7T5j9NNokWHHzy6NxxUMFsm8rx6E6r2tmnDdh1wV7Dcf5taHt7yDa7b4oPdQG75YLoYtkmBakHC",
  "key29": "2VtkWPPPqswPcH1i55g7vFSPtUnDLiiCCLuRWdu3KebjGkr96kbxwVg7ee1Ej1UM4F91Nk4sXd1F2tgeRhpHyHVa",
  "key30": "5hoYt3HMKgmfoDdLoHsJJ8FeDCVGsXTZrHujB1tTzoGTDEpCiXSq1cLsjSNJEZanKkx3phKMres3G6vdxHKEvzyK",
  "key31": "4C2dFqzpacFMKGTmjJ2n7VzefVaHZXytUDmpPHr8FvBs5sRqdoi3E1fhL3xGobGikWXWG7ypEvRkDHpjipPhRqUU",
  "key32": "5NfX5Nc8xcJRDSfSEa6Jg9hY5xdSiv9hvUeV55pnmWa7q4baJwE3gvvw4UawUiJ6YyUup7jChqaaEXmc4gyGgo3b",
  "key33": "2nxANoYkxeS7x23Cs4PVQMjH8BsyeqSy5em7nHkaFBXG8kq33qVDh88xvNvcBhkPy4hLVdeKQhxPdZMjPhqjWTGc",
  "key34": "3DtdPcqsfhDvkX4CUQQUSZadfYhc87gHmVypojZvXy2pgxiyVjAJf4Kdqppm2MwxuwsLYKHzNf5ZM7kc7hyxrhvj",
  "key35": "4iVJschrwyCL5feMZAuQvnGs5m9bWHxT5XS1X166hV4B9fRfcn7Y7JcfVPZBkCq8sbXsUYndPuVdubWaT2TK79Zr",
  "key36": "4RWhtYfWjTiuGzujd6FetrVo4oN9CQaBfDfMRjtWFH6RY3jSK67yULjRKgyqaMYUP5wdSy7za6JbvCCQR9BCNRWU",
  "key37": "49qX6bybhKVf6oDwCxDPSLkdoCvF3QMogP28U3bV74AjgS5UnL6J12EknBFJaGzcWWbQLk17qeJPYQqb9j5C7HAg"
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
