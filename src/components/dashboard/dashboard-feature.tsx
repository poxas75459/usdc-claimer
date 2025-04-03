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
    "12835KmzmYed5fVRQjm36u28811EVjoRNaBoTppxaCjaopF44zSRNB7XPwahDExZNwpQXATLPQPDe1H148yV86Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9abPfU524ufGS6rDHu7jSDevGfpbZAzzSCUWy88XDo8bSMnjuunsBbCmikbjnZyFXTxq6Tv5rmV4Wcr5kRkq8eN",
  "key1": "4uZpY2YPd6ccgWVhxQQxFmyFTnn7yEGunoY1FGye79GeyJaLowCn59LjW4esUo2hkjaUiP4g9ikDGAMkZLnpRN7m",
  "key2": "5jLsSuR6VNZHFBuhArFpn2zb6WjfRAAd9C1Nfdbb5CZ1iv3iUrJXnVwbLPsjVTZqMSZuBs1wKReSUNovhjAKwtb9",
  "key3": "i6RE6mDKaeb9Hpy7ECcQ5cLRS3YsY3KDyGGUHfwEpADAndAMCmrEN1yNzJdx8ziE6xndxMGmqozWTsmAn8W6s6Z",
  "key4": "2s2pHaPd17rnj3RXXnBSDHDSHebgWYzZt6R97RNeW8SMP8S8CDJ2mdik2hAUjLQQQegKfxx3qqyzdw3R1pCvVCFU",
  "key5": "5h2W7ae4U7jDgmE5Mth2BHean7jUinz1U3rhxf4q6VrC1LeL3L77PFQ5r8c2o1LC123TgfZGMeGCswinDgo4FTCp",
  "key6": "5xDZ3US6ftxm1dJkY6suDxNLZAs3m5CyM2TphCToP19P8GmddeK2Xbed5vQaZwwDRUyMdKLAqyZJZSFaRJFNehXz",
  "key7": "4c9sRmcXNuqqw9zGMx3tFvqtABZHFfbC4z1GmDpgTzyp1QcrCTFPKksffbXHQbbNBCnXWdcpVmUJXEVYob7DQTqN",
  "key8": "38jJfRutxbPCVN75pxz3CMkYZPPGTxFAbVuqNshcn2nriTpn5u7t3dYRQLWxffxKTVG79hG6D5x1Bwyjh2npJYpt",
  "key9": "5HYW1MMck6ucxGLtwYfDsKzGfkAQDhpsLDePVK4brG2h2yXYZVWiMcasnRphNMAFTF49GUBFDVTVuoCHPNf8YoMo",
  "key10": "5bBTBAThz4WrYCPfLLmVW1TxTuUbMpfCTVh7q6hDH11FTNjeSYeLLRj8QmJxDzqdsveTQhEgd6owtjUzW1L1XqJv",
  "key11": "2rxiTwYKPEdrLJ2p4RbY2DZ8e8gR3933NxKdNHFoC21YZwo82d935pqRF1g6nqo9ZBQ1cJAFRyWHvbV5kZfpmqTc",
  "key12": "3JDhH3rBsn4gC642xa46rmSHPgDzs49zZfGjrNuHmpHyiVsq1rCp84C53FCPN3FABHXZiirzANvAQkBZ9KEFdDbu",
  "key13": "5C8KdA9kt2R49QPWqASKkW6uabRZN4ps1MUqkcnboaX2zY7x2wbd5nbfu7JqpsQGWL25D1V385zyLzydH9hNGnpn",
  "key14": "5mshUye76zBXSxsnxsEzGxhwiM65zJTgeU7X1EiidnKno3Axjw2dUhMgraLpCmSg1yt5c4cPiQLshLq4B3CFHgzv",
  "key15": "3tp6j8Mtn7i9ACiVKdmT83fXfjr2DH2io5h7dQ19PvLaTJ3LTyg6EqcihPPvKUxYx7gGSg6fyYFhmqKoMKjzsiMQ",
  "key16": "2SLAnRZLxX6m1TkPKPSaNvm9VDz4fuTV5Xw9QdxwWAjDo33TiDAcSdvTEfpW9zrwhbBZSkC9BKVVhBbQGuhkm51M",
  "key17": "4o1mpDpk1k9WMyhCPAXBWdAEVTKMrPSoGUr4GskBiUqjFetNPr6AVvNW3oLvPoNoSnpc9tngAKJqBGzrCTea6FXr",
  "key18": "3VdW9sD6vrZA1DL3ypQBJozzXikwi2eaB9Dn2vh9o8xbR6mgsXKFsskV3eyRbG5RfxJ6QTx3vwhfe3CbX6YtM1Eu",
  "key19": "5HF1Km9mucVwUTB56fnS5mCD2Zc9nXzf6VZJxVmMBTAsorSysPNHNz4fYcnxoJzhRD5Lj68y3G4nmR6mb9nyvtLZ",
  "key20": "2Un7C9gbdfSAptA7Ey8bSHUpeq1utqTViopYz9vWghMQEWF28JyU3FNfH7RW3aURUrXNydoqXnHCz3BP1uDYNbjm",
  "key21": "3E1zT1u9xkHEHoJYggDZ2buGMTeB55UpDkesRT7ndvpxoEWgxCj2GdGVQR13n5YsLxHNA2bJTS8N2ST2uZSvv1zY",
  "key22": "jcv1GVTjiEWqieAHQRNg5SUXjmzXFaKYyWEifE4c8SGZezVHBMoeAwjCwANfeNB65uX3y4dDYYjfQ8nvdqnNgU6",
  "key23": "5PBQjdzgALTnsEoVPrRD14DrvwcWTr9GSkNkk4yY8bfPy43hmu7n6gyhuhZaexnRzfYThbf6mX4yq1UezLd6Ynqd",
  "key24": "hRRjLGuh49RTqYMUobnj6LcAU8JEktF8DB2SUxr54dLNfq6dtF4KwYtFC9W6VyQD6zriCS3rNJd9q32bfaMBgPV",
  "key25": "2Sn54LHJfmrq3rn2NJ7qDrkY4Ld6N7LQ9dnwGFyr5bK622563YE7SqJaSxrhSL9yhAtY2SShY6KMh7mXGXZQUUS9",
  "key26": "3yoSfQTXmLEH1XTmPH5r43jmM5UuDi4A4RyCn8WV5DMZyQUZLAwFXar99Ar9shcaaPDEmWead9PvnuW1NYNJXroo",
  "key27": "3jP1NNZCweNWw3P8ubsqJMSWLRciFWwsdimk5RhFZ49mwtBqPRQaHYjjSDo9axVLgRav6p58kB7RDHLLo3PPWohC",
  "key28": "3oDGGYX1syi5cYxciXKxW1vLGUb87WKriK3NGfWUUi7JjWbaa624EcqBUJ6aZGZ2beHrFxEhDRESE8TyGLRPdNu7"
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
