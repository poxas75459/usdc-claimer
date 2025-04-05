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
    "2mv4VCaViJVpQF7unn6jTYLRM7Fm9TLKBhBqmzdzsCUDb9rcHeSDLDQMGaEgGShJc2FRFJzr767tGWgnUD5wYkhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHpfynYq8tdnbwTvrC6y1Eca1f3mVxHss97WLfiFkk4tZU6rdstMuPBppxDadhhVBQFFy2EeYgPCookSCJC4p2f",
  "key1": "kC8QDj1mvqsXtTg79EgcHuCViGuTyoNEiFjeNVBXaZaMTthz521Nknt6MKoqJ4cGzSnKBuxz5Mxe4p6NdDZpUNA",
  "key2": "3uta79TbgMYAv7ocVKZiAEEAHhzhZXVqufaFr2Ax7PqrLXdSBcwbt1JXV8Qs8tsCqkcegEC7UqvGadwd75dT3gWM",
  "key3": "3wU549kXg2vh1LAfU9Eivz1oufYcH8zwawPqaNzfcpTEoxCoP3Nx1SZKes1Jm3yNdqDcMUu9yHBZSoazC4qvmaL5",
  "key4": "3gbiamqWeUF4Sk7YDjet6cPbjKzHAsuiSDX4EzoFUUyTT6qoM5fNrBFfVS6RBL7YJ8J9LuXhZK5ozhhyEUyywuGH",
  "key5": "C38zbvzrdgyjUNY9PAQCV536jBDzLzB7VjuVAbLQnWkzmqdaXJUHCfmMKn1DB2oze32iCxcBKJPX9JJA3pFntCD",
  "key6": "3mYHbjU54srWE6zCHeZJG2kMxbo6M2QeWor1EVUy9Ld8ZSZ58ZpTNG19pkQAGRfMRU2iBDLdq2WguY1tcQSe3mLP",
  "key7": "jFwEcs3ZtUUNCkoukws8Y3CC6vFm3KZ21nEB9vhdXk26SYaCD5uBoFnsyH7zup3rvCWhcCCxuToVjjs5Wivzcp7",
  "key8": "sYBRe6pN9ewuDQarpEJVSVvK2adkVyJj3YxcMJTMbD5B4dmrBgQvmthrRZmjkkegqgQVnwHhWok4xeTHDam18Zv",
  "key9": "5ytc5hRnj9aRB6m2zrskSAi22V3MzfoggZeVEa8yZV3Vd1Ppypb6hZ6LkHtjvu86B5ShtszCsAfW2T1rrembiyNm",
  "key10": "2hJ1Dsig36cNx69YxWYHSXNdX5z7PA4YF8TH464uF5gXkEoNLuiLye3bnRYaGQrnfZf5UgXUPpei5soGc4T38EFR",
  "key11": "4YpTD9HC6Wh3cM6wYgLHj6NAtAMUTixNiuUDfBbKvHh1JAxpxotxHBNdTLQp3hdkS8CSGAqNxZ5ud4913DNywKrR",
  "key12": "qFTLTmrV4hNTqkGn99Hu5zWUan4iyitjV9oMUz3qbmmtxVSu5eM3d5GPc4g3yCsCYQedNUqM9tndnkk77B4GXdX",
  "key13": "41ipwSbmQZvgjFA7GWhbwJqh7xdj5b4nuPZGgySMs3ybkhxwxEcvw2aHPse3ZQpADmxT8zhCbwstmeo1N6JHyeoj",
  "key14": "3eu1d3o8d48KXAYPfz5V2z2fUv3Da5TmXkR9RFHdQmx2hBSP7f3673pudtuWYTCsAZXu5dcEZFHNUBT9NC6U5yyX",
  "key15": "d4BunydrhpzvYLhyJFBvBNf1LshWmVxkYqYiLMkdr9hkPhQpsyng5YjxRbyNTC7N2Q2ttna6Zs5GsbR8mtrrQWG",
  "key16": "2bqx5PQbvLAzx4aejXWhnL24pwfVNuyfejBKyTqjKneBu1Fzx7sGMgiTJse3T5vcTL8LHsU2Gs2VgpdQbzcuwHv6",
  "key17": "DminAeNsuzydSqjFefSrppCjCrm278oH13v57YfWUfk3C8kaRTxoVbnLv1FwPsj7qdGWnJrCnftvNVg9vhsQAC5",
  "key18": "5u3mJAmAYkbA5TAATt52zBSZ9WYC9x9mgfgRtGww2iF6AwX8dKKwQQJoNxAUKsP8s7JdtJzkLoo5JpnBQusYZXRm",
  "key19": "wDbRA7rWTnL36Kz8ic26jqLZTwvbh7t98yzzMC8Y4rQm24GN2VFMaaT79HAyZNou5GKBH3dxVpkXttkzroQf39y",
  "key20": "REGaJcLHADXEfJGTu8njvJ1UofCTeEzQrLw8zA7p9K7MsPERpSmVTXYDMpcWA3MpYEHbbnSKUtsEXevUGyTwso7",
  "key21": "31fCyuYjXuMDPwVggozVG6gYLD4MmT2ZFhwukWUFcKYA5i6JVK6fYNsp44yQsdneVcQhxHN9nRExng7UB2V3nWsx",
  "key22": "416gKSJMSKhR71ZbPdbZdDo5Qnz3VyZ9rmRiaJiBqJjUH74H3Ltyg2uP5F4r56iAA9it4sTMRwrfipi47NHPT56y",
  "key23": "jLs1Un6qWwd4gmFfQRAWup1PSXZy4TwqdfV9uJTbaZTpHauTPRRWGw67SRYcBmP23K7hehVVnXRZscHHHbXusQX",
  "key24": "53eUjyvA1cbAoWrrT3miM4cj4z6KTMHQio9SXLrmBTJpAzXxqKdrowDAYy5siajbZ3p7A5r4cSq3yx7m7ab3E5eT",
  "key25": "4NTuymDA6BSQuRm2WKBPUankh5AdyPcAXymTHDpqW21bySuDA1XG8YLKQ3yCBjVrt7HdXdtJG58AEbCtVKPVtpq8",
  "key26": "2kgsG6iaxTbo9a6L1n6gaFfvFu2mx5s1EfQrJEtskNAM8wWEDwY7QUq7CgFJEX9sHc5fhHqTZXNT6zuoxHRU7Fda",
  "key27": "45PRv3ForviqAUtRH6cM3ZTpzh53uXBNjQASeHhMRNQ65LZ1mMznjzPsyM3gb6sN2awN4NnzAFxHXY2PhLNczMik",
  "key28": "56sdW4CKtufNyv1khA6tEiHRsB5Cp4Nv19xLdm1ozQqAFA4BQtVUsH8hXir4Rw5F8nYatDbAWTVqjwk3CAfPDVRn",
  "key29": "5ZReUMrwEgS9fBg16RkDAwphYeWrU6sh7CMT1ZJgWCtpjenLJ3Ha5pGwVwtVSmG29N2LAVzs5jNEBvHHtiGJho4i",
  "key30": "5HNPMmZ57qnWNzTvVdWPF6NWgG4Te1p6RkmDaau52u4MnKRJxwZu22YDV4C2kzcNZAMvN25dQtXBRGb6e23jEvG5",
  "key31": "5YzYStViKj3L4KCQjUhuJpn4NyfjT7Jqu6RHFTw2t9sAfqH1TW66wYNtzTfTL37LoeTTiQ1Tj1qyMKa6Ey68EiyP"
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
