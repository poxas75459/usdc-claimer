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
    "43ehZHuKSTWdDLdHDF9Dbe4tH6zCVf5cxiJSVHU9NVC72N4dz3ufH2ca82jQ7QoHXA5FCxgdKnSD97ByzBR7dHz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzXz9ivuHYNYfWVpo7NrYrcRQBrLWG6C46TeZcQScy5DCDhe5USSr41wHuhZQoD8KWctzAypvPsa4iDHrCx4ySX",
  "key1": "4n966k8Js7U7A3TrodwEhLu95npXB4WRAxxfzoKsmH8jftvksK29JW9NqZ9gLCiXL8Rc5hdUsdoc57zBnbjo4dDZ",
  "key2": "5Etf8kxMJfTGMo5UgLqgz7TPLC9w4TEanrpPnCuPFE9MmrPVsPHyYRjGtRpCHo2oS68QsdYWyfGX7uTe6GVAfoF",
  "key3": "2wRnUfGSnf3GNwv4uZfU2uWaf16LoDhRMecd5WG6VK4UUBvumFp3fymyCwtMwfz529NhPyiKZW98ibqtu9bTKhqk",
  "key4": "2PZMo3Drmrc9k6gG9UrLUjeMpH7x2zQZWMjvKNiginyrFS9LrNqgvB58BBzVuQzXCbisS9jSEsn9ib8kiQth7q7P",
  "key5": "BmpG9rfabiNAazPLuo2nq4ZYMSSEg7qKqC9J8EktL7uamUk3o17Hjoartm3H9yKNRxvmX5XevWj5LTsP5PQUEhx",
  "key6": "vhEp2orU7D7sCXrhGuiCzF9NowpFF9pTDENA4wWuXB32E1RS5shxzjKxJgJqSGdSz4uEwra1oHhpAkLheyzs2Xe",
  "key7": "2odt6fb2eCZYKnauZLYt7MtUDCirnVMASQtapucfsYhtbtB2oNiBcSz832ASaMFWD9KiZA4B19QXjXvy2TGQQCBu",
  "key8": "5PPNoeuN5GzekjUnBzYUXtUzqh8dxQftemTwtpSedgamKGH8gZs7xcGxMESj3ZDkvt2MjZmbrrU2ZrVCCbFPYEW2",
  "key9": "2Fg3jrxJmrr1rM4NimyvkT4NBQRBfznEkeVDqfFNzTKjGF8ieWEtyLwxMKwfAGReKWUj59zCAHoCo6vvDm7t2Yas",
  "key10": "fneYMR94CqiyR8wx7GXhGkjhGVcFbSUU3dQi3mzkxJqKxQwXkD6CaxKLEGkYWM7dvSb7EjZJkMsJydmCfdSV6p3",
  "key11": "4nxG2XTPpuWiBXE1YuGSZU4kjxUGptZUWu63hoJAGEqT3K2xa7MYvrkweNfmz62FTehLb9ZP1bdh7nigzr1L3V3F",
  "key12": "5CvwpccKW4RU8aLKdnWs3VzKrRv3r2T4VU7C1zXxvKivFnu2SMYiDbZDR18E5671ti9WgdnA4ZFMWx1LpbNjQCui",
  "key13": "wrhXpyQ9NmcQwYhPRGa2JEBxSGWdkuHZSyGX9ijZ9qnjSWaA3nZdqfKpfVzAcdY4UYy4gCvhf7vHrEpvoPS5iVM",
  "key14": "3oGdod8EpMyCJ3JCQHCVVUGiQpKEYH6F96NLKotVrMGThXLEQSQ675JPEgqFMFGas1XrNvSRnaw6QWooGCC3VfxR",
  "key15": "zp6fAYZrYzQcEMYy5stnPbEUA3p9zkCd7tVqssT9AfuAv3KZimzZNd65AWKSb42cJBnG7yNF1WoHfvy9FDzVxkm",
  "key16": "tR4fAf9gZSo9nUh13cUgSD1GFRTfjnT9ZKBKc7ffCAS4o9g4Bm6oy6hWPqeypFkHLWvnarwebRY2VxVoxxtB3Xo",
  "key17": "5Y75NXe6oDtoqAB1huE55foFaUz68cRdopvosurxZntkqtTXu5ppZibziNjXZXmayxedcgQ1BYMQvxnADTsnxXuT",
  "key18": "VxW9NomDGc2zVPpimUZmKJ3v11BcfZcKthneV5PqpC2p16psv1hjAY2E36Cu2DbA8aHhfEJP4iVYmdeKz4kYiaP",
  "key19": "j8zAaHATdt3Yz88f8Z8e6pMdJc5QFqp6jtq8nARLVJxDfeFDp7znmZsGXWakvj4d2tUoq1Sgjduz77sudYfXEeP",
  "key20": "3y4YrArEeNvjpx1yWiKVmJZBkWr1i1i9GW2gwwnStejnmF2aG5qUkWBptB7LfSyFs3f1bCDvVoSQcDviiaRSPWVA",
  "key21": "2C7is4ip5da24WDVUD3GWN1zsYMh62o1wumjgjKsetrE38z5iqZd1hhV7dnuKpau2C47KcUu1qWg9wboATKnEcpb",
  "key22": "pKfzjnFnuCkNFZUMX6Rqkofmcszsj5na2PQrvo3ezWAer2UKgNWr6ZsbtZ4HpqFi5jKk8Q4NsDwqmDigtkF1yDm",
  "key23": "5U4CWq288dXNAHHM8Kt6HFY87N2LXFHYS3BXrmBys4mxSEKptxVdt6depei9xbWZNMTHAtmMfCyrb14PmUdNFmUh",
  "key24": "kfivPBtku2fmGFXq1Wi1J1NmUN7aw1SNQgPDLhwbjDhFHySBMX46uNixom96pDrCCCSg3VT7PGK4KBBTdK4UYjf",
  "key25": "hCvL7uUSAbdz8uXY8d5stsYT4SgbkkuwKoEsBVFLPGPo4iMs8FMrUKVPyzvxXWPUGs3m81waKs4EY2CmfdiWGyT",
  "key26": "5YZkvcMpUFHdHRxe3F8Lwfi9PvT1sUKRuUhTdiu9EtGrm1PUKy3S5xyeHRcSQBHxE82mjP24iuDLj7AAKuHTqD6K",
  "key27": "2PBtuaXdBT1f44fXcV2C6Ei9eDGsm1Q9AJHgEH6Nt4V7rQstTkHWNvUCLb8JkLd7LXhDzK9PH1KzrVksd1YPJz4Q",
  "key28": "5xv5KmqbiqNTdgpCTwrUgZy65CTAGWGKSWZMr6fCuwGibth1vGYeZFVxzcde957w1BqLrnkdyWoNCYGvzR3brt6u",
  "key29": "SNDLX6hJT1kJVuLnJkfimerpm97urmzbtnMqmrcY4tTNREQLHzzPfV4qQg1dgZGbTGk1H5RgVXX2se343wmC2Se",
  "key30": "3rsKDDUA7DeFa5jYSBHU4CJ4DfXYRXMhehE5KhUkXvY8f3TJp9MisQdoQbsunN4UzoiQRYhkHQpFheY2x8dksg1s",
  "key31": "2FMt7T9i7TsvgXS4C43vPposL715MednbMpUYVhkkkhNnUzf7cNi68kBYZMDGWkdtLPf16eapLbbVhUJCrsAoLLP",
  "key32": "vuSVihzMHKHUqUhXtaNJrgHhgx5iHPa1FmL3wLidRuK2mHHVyNphSerP5EagQ6kLE2dsDk11Jbc3tp2ys9XnY8c",
  "key33": "5okbDw33kkA4WmEwW7GuJfqy4eCsaarFsfNtfbLaW1io1dNXPyrpRx7yiUFRf3a9y32frUeRmBiPMmSUXKPio8qJ",
  "key34": "5WHeTQYGkk1niW9BnQ3gHeiu7AFHD6weSWc7YUr8aMWkpX2qJosQd239Aq1hAaxANnAa4U9jVAZ2muAwLbvz6aoq",
  "key35": "pJbsALEbwUKSD2dxmu1x1zYN1kZbAh42WJPX81Up985W4Pjy94SzZ1N1QgpSSZC9Y4XR7GnPMZvyF37x9reRNiW",
  "key36": "52iVvvFWG3Fd1UHdtC23qhL83oR5xnMxRN3vni2abuWkmrVK3c7NheLdnevT5c29j8M4zejcxqDFQtuSYMeWQRfL",
  "key37": "2rGmsmGCdoBJXm12n4UtrurKt9wc4tidotNF1epBeo5Sq7smALoP91Psi9R3pkWDwCK59iHpkVm46sS9DhbQC8WC",
  "key38": "4BHNjg9t4Y2VjEKy8L2TbbAVNox8u3A4gXfmGZ7DBVRyEg7PfB1D8VtNoMCLHed42z3wZSpxk8r793NrDqLaAVup",
  "key39": "2qyTQmquozAWgMwppWsCoZPSxhopMT7HPuMefNZr6BaufX2HcfxUzhHEqdSooidZbvpsEW6yhva1LmLtu41TLcSe",
  "key40": "eaWqVQB79q9728qbp4hfAgEvrgGuzWc4ZqzMVCP6TvdqJXWtUbsdrk7M9YFofpUXXBxa7Rx9XQqSYxe6DVK3A2o"
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
