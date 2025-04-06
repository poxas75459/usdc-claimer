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
    "2SK45pQ7PVt6GkykC8XQSj9PoYw442RBRKrHFpqfQAbRbZksVMmKRA1RJe6n7ak5HAbNauLE4Q6hNPCnMerFTwiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ee74kPYBif78WYRgJWsRPZLg7T3VY1wxoujNSveYsgqqBDK47iijAF6bCRrkYkVhY4irY4HYfoo4bYxReuFedYH",
  "key1": "1AKbNMUAjtCiDMz6SLSzPJqjMNjBKz9RA79JsZ8YSgsYxWrXW5XoBtNb7YBZUWpstCrNLYa1gB7WStvM5chdFrH",
  "key2": "BGdxqnpnhUUZLn6P7innBnUNwHmpjtxLbBk7A1KcJCWNUN8MFL96DWF51fDzC66G2DzNUnePAFS2L863ZSQ7d1G",
  "key3": "5NUPNRNGWGktc5CKRoeSwSMr53ZJF3waTxHbB9a8SKbZQbrDB4ZgfCZn2j95aP12woLvBpnjZ73eynPAB8WUGtVg",
  "key4": "2Az7w2Vbwd3TyYUvGYUULJac63TrukdFPRChK2xNo78hrWwTvZKGg9VkmArriggsjxhrSjx3Pq4rDdPXvcJnSBBy",
  "key5": "4ga1ryfaAmaDwiPoPiEPheT81ruuXLP6k5ym58ncpGpBxHYENnR7qmgiQ1W3jGp7aLygKznne4egWvHMyNZNhFne",
  "key6": "5nxSTN5azK6Ee8uw59zXYogXmRMykBqKGK2N2teAU7BFCS5GQHjvsKF59rshcKap6gU8GvPGkJr9Pp8i3BinkKDz",
  "key7": "4qncsHzSmnbr5QoUTpuPqS9oHA5CeFdif4thBSDFA4TXzfrBPFyS3axhTkUAzvR3i2qhjNcaMRXHZ2tjC84fVvRd",
  "key8": "2pQfxiXvZjjxZviVb4ohAKoLZtNcftLw1qxPfDmhpL9XoDpo3bPuKy5wbmLK5erVYqEtYPuxxrVVTG7RZhZSMPxF",
  "key9": "2ENEG142hM7mGdhrZ6wJxFSS2Nb5tw9Aqrb9b7FrbjwgvRrceMaqwg9WDk62neNmUp5CBdQgGqusGeuDmrWx3EKG",
  "key10": "4pAAQUiGtnwy7ZV1gAUnKcwYbcT5o5p6ic8Gw6ZW3R3ESbkDCv6L6YPuZzjNBpiNEwRjiNk2iyLwh6H9K8bXVpwe",
  "key11": "5YLEmHUW3L148AgQ2scsvCsuQUHs1svN7vi3AfEy5ei18DqseVACYgYSTTZt5KErzB6kPD3ei7iFMfraJwzUisuh",
  "key12": "2Ykiuodx61e5iFGSaxkbLrdHNxPNSLpxQPgTGKrQSNAAdwtUeuhs2m6aM3DaJbpRxyhJae6c6SRvjE85NAqkTGcG",
  "key13": "4Q3pL5HvQGga6uZ49VqzCv2MbGm2cVsbUpW4ngKwjNuhRo8Te1FLnL4ddyS6SucjrfdM3GEKTVo3cK1WZwztT41C",
  "key14": "5Qj8S3TQ8rsSxhkwzJVrridFnwexUkJGngoHEtqWzxXbt9B9BdNecsKttj1NfpyNHKDfgUa3DsUe4vyRJZMQSehW",
  "key15": "W7ZAcrUuxXccDqszCAA9jzx6iTpUz7bESRrmGLLXoK1FcebULE8czPoDPTCfHB2kuidsQpQB2B6D7rVVR7zLgmu",
  "key16": "5Q9T4J5wD6z6uviNQ3psHP8wCtjL4zieWkeZXX2GM2ryKxm5jA5X7Ch7riVxcLMZYbadD9aihDR3EBESoRQowvDE",
  "key17": "329cjgEyKBEHC3i1VA5H2UEr9xfnLXP9EFuaCAeu1LNE9SWQiNmRucm7zz8hBMd5ELFnUi2E4jyin2KRLx1pw27C",
  "key18": "cP5sDkZZ9X6VdX84nXRJqUHTqzMUBMpwPE7XH5k9ehhYu58Zh4JKMkKEYemNNoSpiyqKLWCSpVT7XtU6vg58Nd5",
  "key19": "2i72oy4fganTFcw9DE3Vma6iWfPjoKRzrQ6h7Wpe8NG7eCzj73LQhVp82y2cnuqo2QtLk2FJrB7NRt7QpK6wctqg",
  "key20": "5jRXkYoKFAyMnqXpiF1FMH3Uw3psJHyrb6n629kVW2JX7AKbop57v4F4yF9buaCvPdwG3A5vcNyZZNWFxTrcqC5A",
  "key21": "4TF1rrjT2PacDuiFwtaAPhp4tPNDA8o89aPaAYj7158S2DSR27acZCSsp2HjMYJUVEEDsiTits4F8ExXwa1ya9F",
  "key22": "2jefzBicKUBiXhDMugbZfZfeo9LP5xeZFZedqV6YTV8y4wYM3uVFW71BSYSmBaN5LQP26H5t4GNqMuLz335ukJiG",
  "key23": "2o4etYVkRjEUSKn4SYviKjPuvs3rVW5SiqXakDz2bXLba6thKeCoBisj5o2AyrZch6twf2uveKGb1oCyj7JfYKM7",
  "key24": "64LxvUH7Dzosc7MrUazocSoVcPUsA336VYRVMEb13hGdtAXMcDAtpQoXhVT43xjyHHc9p1odT5qwyvD5Kt3u5aHV",
  "key25": "5HAMjLkLoJo512ZcQEgJHczyLZpkehJjtrBhjUWod2d7KYTMNukYrpsN3Duh1BnGxQcrhRJo9gPZeqDycQB4JaP6",
  "key26": "2TXMpsKxcQSV3fuVn2Cv7vZhjL56isHgC32wM66dC847MN1WNYEPbm8T8o2NziJXj6eBJyDVc9k9ksXLdncyZG7w",
  "key27": "5F2CyPu9keqUyTSUaHifvZ6VxQQeM1tVKSgzjRyaKo7kMgZbUT1YyYLoeF9crnBp3jY2UKMY9qB3zcGVnmSKtgbc",
  "key28": "kDWYRpaoS8Ea1nWggVDhaL7Ys8BhVfxufXq3TNyshrEzygntKycxD2rXv35UVrC3MsdfPjcFQmqgrUDcNmWGsJj",
  "key29": "4RWgCxma63s1ZDQtfPy8GVYmAF5HCK86s6DJhZaydSVcjYp2yB7mfAv2kxXxCSjzaYViqHbSqHz6hc5KmS8UydZ1",
  "key30": "2yiEJMrcxDgExAgKmWUXidNjkkG8FrydCSA2ur7ZbeDWjhLbA8KB8B39RPqMcJmxTN5TyfisYXSbpG58wi5q6Xg3",
  "key31": "3fZUMkUsruDbEhP7WYyMLue9hFEUevd47FbVDBbzCnehRxk9KV2qcJ5RYwgvUYGq8q6dXqZHrj9aExpqBjMCH2f5",
  "key32": "4B3o2YAzkKgpj3PhJFCTTDW3LtsX27xrdozBsE8xQJyVhDK3gPk1QV8Vu7rCt23BCRTieb16orptaa1BQQadr6gd",
  "key33": "5nwbmMjQk5u95uBeAdYm8aBMSrv3qANFdH3AdsJKTAA3cLcEyUgy9LKtgCPQcWEbyhygkFt7osR7bpZseuRFWeVR",
  "key34": "5MsdMsDWy5qdkcPhkdXjr13sPQghvUDZdwZf6osBYkhNnS8S8H2pJtsf4uugPVKt3mefVaectw6KjzY47FfiyBBh",
  "key35": "4Sus1PSv4LrawB1qaajvH6ZnqjX6yoK2BQq8KfugtkngV4fGzjsmXNiabJtGsgaQifLfvNDrXjimHKmnGm4B5jsr",
  "key36": "2ByKbbSCgCTrAJoqimYHEJbibbbFSnskn7V5r3yjvByFYHF1L6nVya8uoNV1P7JmSvXuyxkg7x1yhMGAuGfPAf6z",
  "key37": "5Tq8XhRYsFJ99ngZBpkhgCN8sfuuyBy7Go3LfobKAJ63iVgxL7s3skiSzZdmxfzxsUUcmdMpZhjz2JunjGP3yYFN",
  "key38": "3JNykmQ5dddyeRWvPcRZ5AhXGBC7zrMiCEEH4NsPu8fQCNdvaR29ctcLJ9hZFAD69sGa8mWVLeTECx2STE4vrTxC",
  "key39": "2F5ib3aieMMXDxXS2J1JHkshMyUT5NJmQG22gQ2fVi5MvA8BCtjvQRbFXhDojbLpdEnUThQqQYbkB3Po7q67Wx3V"
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
