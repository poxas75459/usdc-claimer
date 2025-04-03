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
    "2MJXK5FCKsqaL6QdsEASM8sm6zCSGTEwnyphimGxvFYGQko9qPE4uWcigJmwuwRsWwcT1dCmXCX3SYpA26Ex5qcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXDmorzjaq6oGowWuGdbDx31UXevg9JfY9g8Ed1CzQV4vVPLepoLBJRyX1KNiC6Cvqz2uU7YUaKvkezXtic3Rkr",
  "key1": "2AwQNhP3XNEatcf2t2e5ZZuoMigQGS5uPPTdeSFVnjX91KpF3agXe4NDzCnqh52Nyjgir12dTfztBwnmW3BHKV1u",
  "key2": "5tA4WkPdZjNwT59pYrJUazY2dKHXxRmMgkkNTADTcwqSLAPdExUkxAT4jnanmZdpb2UaX7eQ7hWtww4aYDQpFpo2",
  "key3": "NyBfiKMPeC1jCM16pACpa9ibynsXEAyVLRRUzEPSzNs6H9TduAzTqcKqRmAjv8vsaANG3RodWPfZ3JPGZVgYwod",
  "key4": "4XbV84ZbUCaT8XqNnqtpLD8zQeuV83tQf7v7FHKSnfJ8oSJQg9x74xrP7akbU34wMUogsPBZERMY1jNKT83dyXdd",
  "key5": "eMb3MSP3CpxE2yEk3BqfCF7TVVnQ69KNTxEF5EhV3FyLSKYDDbwmfgixo17cgDn4iTtrg7YAdamexxwPQhySf2W",
  "key6": "5zUUrCvtyXmZyjB2jgnwMQzerbPDT7XXeUHYeyRAMjtuwV7ttpQGLbtz7sobcFQfFVsSbtmyoaFtpwhr4i7z3XDB",
  "key7": "3ZjgxHKyvhqHh1AHdpt6bcAEznY4mgFygS9LrMqekoQs1VjXp3aE9HEjTmeHUr2qRL23xsqGvdEj433TpPozX1HJ",
  "key8": "32yre67BBwuJtdnpBu19AH5PqBTyUvX2oPLLCbjmd95gvAnybML7yzxoN5qWEEQrAvsMgsDLQscfJ26aStuC1CxH",
  "key9": "2RE77GJVEGYHCfYZ13Ts8QiLkSg19CPTe568faqReDp356RQszQGeA5ee1Q8Jyg54Pnwn4uPHYaLLt9ozgmLNFHx",
  "key10": "3z4HgHY1KfhdsRztrtpEiYzsLbkpkp5WgdEhpVJjSZL4z9fcfPStokNBuvr53figHkn85Ubv2coWe5Kq6R54TxS7",
  "key11": "DeSs9mE7ts3aYsPgM1GR6Ao2tA7Qo84QQCJgY5f25UovtUwA6BSfLVrPXgbZVN3xqW9t4ZBrMd9EoDyPWiUCNLG",
  "key12": "4bjyA654yyzAYshbve7Gf9d2zkSuJ5sRzuJpgiBiciRNTBmFWiCj9WsPGXPigZASGoFdg3DtdipQTWExPTstr73b",
  "key13": "89i1bvp4MmbNv2XdnjeGFcTQh7kmEo3hLop3YgoLVZeR29yQdtipR7Ye4KYWdjXUESNyVBpnvRjJGWf4DwTZRLk",
  "key14": "2CcBBY6DVFpRUup4vyYDQmiV2bLoYFRkkBY54QaCrfrtobVwDfdCxVNaE4Y3oR4Rwf8bJEY5Zh9dAG25ZCBSppe3",
  "key15": "4GGY1QPZeMVADbvhhU54JUrTwnW2HQcsKUgg2Rkev5Sv6DxTANGvH17ie735rwn3Bn75kuzpdq7AYf4dD4YzBuYq",
  "key16": "5HCy7i3EBkKKD3YS7HLweS2QCLWuDgyuvc3erKdQjdbELSvENi8aVJXCrviY8mmzVunGpNnaMA7bnEQeAY3Q3aTk",
  "key17": "3GzHikckCugqBJFjEJ1kSNdXyrzDjDuNYRBEgnKgMLNqkRPWcQ15tWshTXP1F8BbdX33GJizPx8KYJXS8rSutXAM",
  "key18": "5L7ZDxCqtbdbfhstv4aAFDQ8shHjbrNPc9q8cYji3ewddmru2jRP9gKPtcUtyyP9QR8GBjvUXykCYNTiK5fKjVZo",
  "key19": "64pnwQGneS7qSgQQKkkrmhu3dS8vkNS55vNWSnCgeV82D4XrQtbzb2kg3nPzACAHX4pmq55sEGsTEZcxG39ULjv6",
  "key20": "2iLXTWCMRGdq3f25Rf48QdxaURV8BxRc6XYAoTPLgKnsTFd3Qg163vNiLasRVX9ZwtTQEU89BVYFMfASr3K3fwH6",
  "key21": "43CvWiqjbP3mCyqRnEpsXwd6kz1F1uQUunu1RoBQBwV1uiNCtbFE5zPvAyPGkA58KxbAqu2tQFZoN5iN36iRepUA",
  "key22": "2FRiqXNJnJvK3nAFkB6pNAfXVsurUm1AHT72BwP36JXFXKsfWGtSB8THape2SQTgiNxZQWvPAVwY4bXBxeSDRupC",
  "key23": "2HSeQrzDhBwxkyEGUWFgDN1BusZUy7i4ucUMBcRkUqyeYDd3LjHxCbTfRoDoheAFME2Rb2xNptjgif4ESc6ux87h",
  "key24": "5eLujVzsrWaST7j9UQvAzhiyVqKgYRkn51ht5pMT92TQ1DNMJ1Tf5QQ2HBYKgkZNz5xaCUvgTcCPKiHZ1Brbuoex",
  "key25": "4ZGy4ue3ZHL3XgrPwuByt3Js34SXMk51FV2jWv8iHUTvfH4GV2Zwr6XmD1CrmvDmFA6kVXwN8KmEwb7EqmB1RMK2",
  "key26": "4XCN5EDKGQfMSR5dWNMbespiV5HPQYcn6Qn2LHseJhuk5zZDwaakd3vbNCVgb4qgv6QeohY2XtqVz7EDVwsLcrF2",
  "key27": "4iScVUsZkMsCN24HJreCF8Km3tjvvmUHT1rBrnFPRFS1VibBfi9bVcnTrTYeTsbwER7MF23WMdnB8vDGPuBdswEm",
  "key28": "4VAmZfSuT6dBdsxUu1nowGuEyHwzJap2tbt5ozXscgFGCHBo3Q2VHCscn2FwR22QozbTpW5j4dipjkkZBgvsWaVr",
  "key29": "57oBKXmMK6qjBuabDauFmFvtg2GihZNXPwTD7eN8jJwAz9PnHR2bjHVgjcm75fFuj5MErT3fStaPJHggy34XAS1h",
  "key30": "32FKW7t5vDQ7HZfJit9ymHBcwTS1fBYfvsBaWrpBsg8vV8CM4Cn8yqviGwmkDfazvxdLiC2NKACJVd8QuYwXGv4p"
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
