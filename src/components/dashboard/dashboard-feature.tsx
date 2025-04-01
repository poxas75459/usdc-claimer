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
    "5fcxDjBp3x23Si7duxqMRee9eyiiLyMaudeowRWWgSw8NRdvHHr3HeJsECjWrhq9c7SBMox2SABAa5WqHu9xBJAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHDmfUmk1rjeJQzfqQaMr9SA7L93gS8qqSefeJWivTnX4efXfWXkXGbhZ5VLp3wWaKbwejeXpALMWhdnWo17yhN",
  "key1": "26ZeRqfxGkArG8bLNv87gcEMbsvZLTgXy3pPWdUARTWMGBBB1ApN6BsmZ4UEtqshunFBuRN3WuQj7mGhr9xiuG27",
  "key2": "4ZJwCwDuwZXwyFAEHV8TNQW9rtFaKotTsi6U3nbsJ9crJkbbpL4yKLr6x5aM7YvJNEFzi197qgxG137RBwQHtFUZ",
  "key3": "2LuRfLKiZ9J1736giMTyrKiB3ezFP9rwqniu4AhNTK4gxQqrmi3n6goYM7k6yTvdgKqwRXXmHgTLXPmrbSpAAvmu",
  "key4": "5YfCCt7CKHDksBJZqcdsmdW2jqV5AxBKa7DFk2fc7hQBMT5sXeH767G298kuGUWfK9FG8EgMTfEtU39Dwm1YeWXb",
  "key5": "39CMxBtpDRoSqC1cJr9DageYb8jg71SU6EaZQZww4ZaTLkqpNHepMHRafVqXSUpY1a2yHo4eyAoUCb4ZsxtyKjdh",
  "key6": "Gi9NCe6Q4YqHTv921QymQMyHt684jYaYuxP27F8BDS1CHnudBEde3UjJLdxrJz1mwAH8q3Votqdm54cqQdQVRN7",
  "key7": "65LYB15EPffoXMt47R3p6PePa784iveGM7BAbnFAuFYq8MrVcMyNnfMFyhibRV5KkCXoZecdxY4kb6zMahnhwqQa",
  "key8": "52kwjATvVZ8tkqbtzidRadzyoLbA5QZQghsCj9DzVgq2hNS85XvW6qCeM2KhrTP7tGp9dB2psFZxGh1QsR5PvrMR",
  "key9": "aK2PmpSD17HQU4hd9DQ8RjnfmXwLfjVyGjhg3UiWkqAV1oFivrJRBquJtPULsSs797hpRaCmeVp8rU6kwM7vw6P",
  "key10": "b65NK2eJFPtZuCPBmf6dVFNCishoBdSM6z6eQf1NFyb4FXbT97JYaL4Ddxt2r7CSYYJsb6F94THCfMUjNPQqPvQ",
  "key11": "5bjjL9eCHFZJnUNCY4VEdCvh3KGEi2nkRjpBGoBiTYL1ftvTfdCtBzxqXZbATxUpEu6TUJdXrL8Qpo8GQ5pwpQTM",
  "key12": "32BheayLh7Q9SdSigPdTitxUfQJ917ewboTnDgPyqTKicZFSFTjYykPGUcdHwnK8DFTAfLRAqX7fChtFGU6YMk3J",
  "key13": "4jdiBCs1RG3mcBoHsucbHLpKrXbJLHghovxFwquA2Fntfc7x63KLnsn3o4Dz5oUwWNkhYY2aJMKWWfiByMwZZDVB",
  "key14": "oDfeUpPwy8A7jzwXrJ3fnyXg39pwSMbZ8iqqYdTjCGSGJQBHeqcWMBF1Dcddq14J4bhCM1kzkHf9NS2SRowwN6Z",
  "key15": "2Vj3WphM1e9KADkSwVuBg8y4yNB6uNUbPY5NbufLA5NtyNxXHAy2Jmnp8Tp2obJt7SbkNx1cQmxNtw6LCRcmYzxJ",
  "key16": "52wUHpdtso4tAdhRPoQMNkKbbCCrqBFScc2vnpt3WpwJ3M2D4q8dc2tGxvSPKQcJot6n6wmWCghN7eKS4Wg8SxxD",
  "key17": "2wt8uN89jeXhWZdmGxRgF37fvFWBhJe9gXz5TZY5RJ2LYE81fd1tmJs2RGcgjoKHL3C9c7Bsz2EWzMDFdeyKQ3LL",
  "key18": "66Wd6d1jPCw52VNTxKxTgyQw26gMBsXKncfwnh7xUyJJNRkbLE85NNkusgBqxmXj81XM5auuCLpKiwJ68fzZuieC",
  "key19": "szb7VZ1otgZy92WHKz6XcAozBmcyrpWYsuWzkUEqjMdLsaKFM9zgSueri2mfr1twTyM95Jf3UqX78c1k2rHojfe",
  "key20": "LvVDJKKPgtV7zBEvPD2Vdjza88arN6p2dW8hBeWqx2CYqsrjMycHitRqbYnxHfjo25uEL77Wove789a1p6ctVY2",
  "key21": "3jEEEeUSJZV7MqMdJJQBm1LqXJc3xCs3Vau4MSeeoPJHujqYPZaUiXJNdCkoEwpF4jmmCe8tGYnJb3koPFH1aoZo",
  "key22": "5P65tutUCHdG1TFrueYtQot2XsTubw882oXGxxpMAC9bTGnJxoByj28Zbv4K6hA7GSBHxvMgiaDk92CnsKgkMb2D",
  "key23": "3pByTU9pGa8ShGfeNJNeB8Hgcuq3mvWBFmAv8UAz2gtJp53WDhUkZEbZSvbQHEb8yGArdnjnUBtVumc8wL3wJg45",
  "key24": "27yQ6jjwZ8hdEhwWscSb6RniCyJQ5Pam3J5gYdErn4PuYXaBZFdmYtiuGe2UEfCDB3cZCsDu6hQ9oDRbXPvUEguk",
  "key25": "4BxJRpVy48yM2ocX2QKLC5Kv4rzL5bnWUAfi8mFqqheYZdGGHziuAndVrNLwuhq7qAifbCvMK6aVPR6MGhSTsUy",
  "key26": "2n8tm9oVVYeKy8FbQmA91bcHSj1iLp6vKzDveiEGeEExNxYNJCP2uYwAEU5AKqcDcsEDhGsg5rvZdLLD5ALqCcpJ",
  "key27": "r1WDVKQeA62mQXhdHL2GHVqEkKRYE4oZMvJVTPbJ9QAgzjWSfkUiQWxuh5t3mnFhHdHu1wVExQsEKjqK9Jmdsnn",
  "key28": "F7aQhpYEJsLopcrCngDN2GZsNCeqyDXVgbAkZMv92789ZBwnx65D53mKsCQmUxAE5zGBFuMPAbiqLSPA5TvP1D8",
  "key29": "2qiqTgL36xt2aoza7wdfpfTBv2djdMCiMhCLJrytFDQr2UadZL4BkAoKQGskvCBwDZEGHgoLHpHqW99RDMrLfUuP",
  "key30": "qemTSR2cmrr71MH9B6vqZgagKTL2vHU6W8fKQ4DCRXZmVg32HuvLsZ2duJ79cjerBAJFBoG7A4ZrAytpmxLMdb2",
  "key31": "3LHeXcNGMEtJQ3MABJkc3ugZrF9Xo2Yh73jGJ2SM5g2XsmckdG4bZV3kDcQkLJSNy5GwJiYw3bLfZJyatqhk9oyT",
  "key32": "3L8y5mJmBUYnUoG9B7yYFPEf5rdDNKXfYPfvRfTUyYpiSE7duxKgVL2R9ZhYPgkxyZpJS2HRcrB781UHNucWogBH",
  "key33": "5e7cxbsPkFFfV4XHjen5MTef2zcAtmw7wKhXFTHeqV6GGuwafvDbLkHiS3sM212hVedFjPM1mVFJTtDToTmsKuzZ",
  "key34": "4qt5csgikJMWMijEiWJV2JAXL5JHjjVngZZKywzHEvJuxKm5gwv6ZWFXjvhgDxd3uzjqGWPXxw3Prv2vCx1rTA9i",
  "key35": "5e7XgDra6TCipVbh4NpZ3Hz8zH5YygcahJb8twa7Qbgr9pxowHjwKU5ceZBMySMMnpqB2asNmgCPSBJvCWVa82ZQ",
  "key36": "31sHYog7X2kKmAUMDEU8WD894LH7DExY959yBKfSuK4cHq2SfgiQqbMBSr9M8PHvHHgNrDNS2W67yCvkYTB97fiZ",
  "key37": "4mieobpxwF1V4XgRjFBVGYNKMf3hDhytKDv2soJMMGDBF6wrqCiB1uLVmZSVsJC9t8xhaeKjQHpyzZd7xcExiGaP",
  "key38": "5jECm7UC3ye6E7y4g9brkrGWct7GDT4RGXkXMkKJVPK2oe1hjZ2kXc7bTX2VZVGeuadN8jXJ6xXGDZyHM37GrAuW",
  "key39": "fJBGbMdCDmrmhc9iV1xBi2gWzGWKgNQWgnCnffQn1hXxeUENK56PHm73uybadhboP2fx79TebtrSXEASkgUwXNF",
  "key40": "4KMcP7NrqMyfnQu8eemVxd696iRHMqD1MzxiDafUMC9n1mpwjK8E1UVGb1jdjvAZtAWWecXyQQVy1K1XqwcPjyvb",
  "key41": "3Qiew8KWExUu26DXutEPYNKDhQGMktwShVJxittxtnjbbttQknYbgx4EyXgm1muHbPdpqm7LgoQ5HS4qhLkNmBzL",
  "key42": "61deEwnXW2wPGrxzVUNFsabUZmA225ep1AD1xcQeALftmsMfn14xa7rxSz89ztGYhgdY8tTCufnsoXBWxVxe4tYb"
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
