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
    "4LQS2SFLp4mY4B4TkG6EWC7nCeCr48bhnzfPU7TfzsQVcrQS3xPCsyTAdwWYPp18qM6152vqLUDkuj2PbmrWg743"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFhEsxMtC3ABXV2bSe2WP15p2SKMKWkRx9eGbnCvoCgB7XdqocjWNexYFDUQXyZWzbY7F59pSerfLju32Evg6QX",
  "key1": "4Az2B3aHSSZStpFqmfwjmcGcgbB4NrmspzvWXLZCfNc8PcqEHF8CJE3KScznzfKQbAxr1BYZRWRr138JWTs8r5y1",
  "key2": "LjbiDXB8uFJD4nmfUinJ7iFNNoLC7RKXLNuuSdZ24GAHTc1kycM43FE2nGDuYwo1Z4CDFT5z85sc6vxdGNb5h1A",
  "key3": "4eTgpYe9cTW79dPpD99SdbGFopzRFUUzLjZi1yV1U73HBTLngEDiYcvouMZNPqzxvgQ3LwFyuoCndZj6DeGRqwsi",
  "key4": "4p6YorU3gd9DZygw3RrEyPbKQjAB5wpEihCQ55iHH12ZnqzWTgxBJcBGTogidVpyJNy4sA92uDJmicZr6vXzite9",
  "key5": "5ssHyCZ8yP49xHi7edqTiLruvEQ6Yf2n1FBTbyTEsMe3L1YnxKiDkRnhqUNLNhs9X4PvNoqW4jh4docmcQbLYTDm",
  "key6": "4rftmM9agrbc11QXmLCZBojL7QoMMnegyyFTwREAQJyhRPeQbpLsAZaLimf78NAMcXnCVhtuutpQwV1gNU5MtMHe",
  "key7": "46cCWWf5TKNWYAjyFZitDecLYdvNvzCL12dtnQv2Rx2V8e6TbLRGa9t2Y7Tm1L6ErJ5SJVpHAKSU6KoH2gSoY9o8",
  "key8": "5kP4SgMPBn1nXhG3DXdeAitk1hfHjNiBr425gXTerRg4we1hApXkhhZ9F83wPjBaHjG1u5sXLfmQqWHB3uiPwhHT",
  "key9": "2T1FexDGmsFc4i64qJKiwgWLc6KBCNAz1bs889BHJKXDS948ZU3QtTgFfv2xhGbJb7zdqRGphvJmAcTpgE8YNxmk",
  "key10": "tooFHsEpGGAQw7xQLuLWFeakzQy1vQk421qzrd66Rjbfh7LDkxQDxtgySDd9V7pNX7HVy1i9NsxctwHs6GmNUqd",
  "key11": "5N7EgoY91F6GdNyHFEDUFYSUosk5F8yGZDQPKiQNFe6B6NbswmHQEEiFrkHb3CRQEkGY9GSJwFAmWB9hZ98xQhdt",
  "key12": "5bq4CybASUrzjNSPfP2jqRg6mJLiEJ8FoMg2M5ZKunEg9sA3NrT7stcQ2Bo5WMVJSdETyxV3wDiziYhRZXb2chLp",
  "key13": "4UJ3T6a5QQ8ooqM3s5EowTpEYLbffn3UhHPPqTjVbzaJTEueTypqtpRgBxdL6DnFCxzT1NhZHuXrj6sKS8GxrxYv",
  "key14": "3taW4UZfpPyR8kDtfzDY2qpgS1ydgs3kpV1UYiyLEhfjWDMwW6j2aTiANzkzGo11f83Cbq5CtYTTevq4dwTzSivt",
  "key15": "3iRbCe5N8NoeGcFCXXyk6dQ4Hiv4bsNAsDj7xSpuYYX9JAWwqrKLGQBr14RXhGq9264NKZv7BsdVvPkfDc6XTxcZ",
  "key16": "ZytxBxrNJQqFz3s2cgTGebX1ExUkiDbnHPVgjMVJupDBdTrBrdqGU7fAD4t9ByHLipXAYLePRnTuuBpUJkDpUGy",
  "key17": "2DqaMZFddshTwjFFzdKmLCkrwZ16mZzGey7MdEghiSz7nVCXuvVfdDFzP7Uva79pnZZv7J61PM8qy1Cd1pdGkAV8",
  "key18": "2pXr7BHyg1BB4jp1KnpmZzomxdcLG7Y9b1Rv26f6ULP4GP3ZNpJ5ZB5RZsGLnwCsfyL59bUvwcRswyq7bLP2Vsd8",
  "key19": "66SgMGk2xRyn1eZLriF25y2p4xcwkjcC5Lpm5gmkNbKAQ1akSSn6KzGpjxrrpB9CDbxmd3g7aADKJ87PwPXtb8u7",
  "key20": "4mMY9Mj268wnFych8zS4WzBbbAAhwEZRYxRRLVKexjx2JdzC19WmADcioANTJT6CDhb5kdsaBoi4yW2qACqgi1xp",
  "key21": "5o3wuaLQN9dMZ8Hrxp9wNo3e9izMA1WdjceEmTAUyc6aC6672VKKA2tPqbmkkeTmf8QQJQ2jkzfhSeoF8kWZ15HE",
  "key22": "2wHWWB1y7CSzqv5U2jZzy5K5xXADn6GoyxGR17HAyrBQKzuwhXjrKa1kVEpVZJG1MN9JLmmmiS5n1Z5G56NX5bDW",
  "key23": "Zn4pRwC8gnDTWxZM36XWthN1r1sd1euMoujVY3cBQEp4tqJxt3AXzav9jkKYBJDBxwfYLQycUaCNippfRodRWY4",
  "key24": "BX1hV5rPFKU2UwPbzKDNd6Sgks596XfUzm9cwXmeYQnJGbbDuGccEpNF7dKJGJHAxvd86dF4Sbs6DeMAPAm86zC",
  "key25": "8jWrbpiEHPje7XyTFZH6N1QfCCbEbHtBfc4yMRyaoE5sDe81iJb8kcE37Vkiqqkn91PkLYfsJnG8BpUz41Romgk",
  "key26": "2HjbbZJf7DU7CGvKNnr3mum8hgAKZH4r7sALifH1EZ4Nsx8th44nTp4GVKh6XM2oMJ6S9JFpGpFpDuy1foGzzB2S",
  "key27": "4A3f6b7hnBa4P2pWEeFjQVEEGU9EaeQ4h4DmKfXMH2GYfqRRby6ryaG3hR8ajHezG9nBtt6oYJD4nP17WND3aDMK",
  "key28": "B74ypxaeirHo1ALUNvFr8bTbzasAjT3M6fPnooibtfdvfH2qJwAFP5MYuBXF1n2RL3hS3jyfLRmRbRXzGmujLev",
  "key29": "Q3ZLFt9Tc3DyTfSyDHkR5ewACxJm6SaBoKs6pyB5obeuNqWzqChgLmAxvfJthzUGshYMZmHpMAonCoy8HeHiU4s",
  "key30": "3zUksPYtQeQ8sGdV1jWNNMRTsjtWJeK8GSKrtJtyria9QUb8fkL3CpcDSVZonmK2CidSmeoxqeDt3eHsEWugsvof",
  "key31": "2xBK7rkitAqQkykSfs3ZgAbbL9vcxcRWsEcqDPjsYUckc8AriPzXzaS1X6VawdqToHJtVE7de2JhyFvzfLri6mMs",
  "key32": "4q6bPwYpfQpp1gvUgHY5F4ZemgVhmKKEe4bXznVyAYjW4z8AZGKMp9aVkfX1KJVnTCa9WAVCCmd3natBUQq292x",
  "key33": "2kquhDLQNiTyeDj7vunqUTjiHwo4hXBMmi4g19R1YDKfanF1MHUpgqwFS1HxoctvzUemFmADwJY9QpcyDn7LVhm",
  "key34": "4Ld3eRm8RUCCKU3vsvY4Kopeh7YVvaarQLZwzYuhFc6fVitk1g4ARC6D1SNDqBYyn9vBbMGWJPyYBXNcLALNeu6v",
  "key35": "Gw6i4scuSfrj97Nbg9cRZ2J8aHuWHXw3fFpaWLYcSuTuQdcYoPbJhiPEhYU38cbFpoYbtZbajb4kGVECWURHnBS"
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
