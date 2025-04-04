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
    "3AMpcHWyoRMTXx6DrscoE1VeR9ZyhQtZ5qWR6s1qPimRyqF57pbkGDCdHMmfsZECMR3jNiWXbxzWENJpQahDXFjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1cCZTjf6yE7ndYfgTQViCvLEL38VieoWfwhKHAuZqtfToCLciqxw4CTLusW5WUqBXNyCjsV54E339UHVJM9cvC",
  "key1": "Bn2Rgkdbvv5VPcdv31EeauXFvBNQPKuuwcKWzDUfCp58dnk88VjAmrpG8p1sR27izY3wvE13PkQxBxQkBGLeqtk",
  "key2": "3iZyEH94FctvyUgBR2FWXfTrUr5kSbuAa2h9yC59rsTzm4jdgsxQBoVga3dnBYZTeoTo2fTCLiKQPycztEBLQhpT",
  "key3": "2rVwDRTQZFvXWPeHmEQcVEkWb13kW94HZqzRNBTFztrRnQDyrcETDbDeLuvFyYuZDxbSLR6Evmrg8MowWZFeU3Rc",
  "key4": "4Rbs3BeZXGmWdFSgARctkXEq2eNy9JxSPZuTZ9FeRP9GW7nwmugNaeUQHBrigxxSTcbxxoNCtvDWBamxtt8wEMfL",
  "key5": "4hwF5QdcR3ZSKm2ENwwd2j7rtF7EbPqoymy4vUTR2eUPPVWKyAa5PBF1r2b18fYFygPtP78qau8bshrUYELT5N7V",
  "key6": "Zb4NezkjCaDgrHs4QFjw3QxZWZTnvMB3YvGyrDpzA7EcMP1nqPidDYSibUQjSfunYdBQ5eCuEDQ45XdDTg28iW4",
  "key7": "46g1vd5h4DKuB53eUTCfLe9BzQVCwPw6yZfczt6KMeB93wnfAU7yH9pepQcKmXZiLXieYjcFPyGdWypoWj7r8mBk",
  "key8": "5MkGy27jvvJcsHBCc4RGxAtZ1Dca18dUkhQ6Fxm1iZZUjM9MWVyNyKEJ72iht6EAw65bPfEMTFWFy6A16yY4E297",
  "key9": "5VyXebQmhd4CwYRyjCpooxCb5Vu9szCuSLTcobmvi7kqd2zx3bZF7ToMTL3JzaEMKTn2JxHrkcCAy4uSTPR1tsK8",
  "key10": "5n6fPnh6XvK4rzEdekeXHvVGzpbLr1NUc9X8ZPfECNHW7FESnvhLnaEfWzNiku7Urzuzbne95gj6pCXRu5H4PScG",
  "key11": "4hEVTdQSFtbTAY1LbRpVRWhuyBGrYws9ScKqFSMDPVJUgczrxMBQEtsX4iPFZ2LKzLKDKXvYXc4CMPWw2139BxNo",
  "key12": "iZeFEeB3XNkkV7RFBabTJnxu87deKwHD6qNZbUC59qvcZt7mWGqv2vY15C7ansnytu2LZWSLZEAk1vyP4txxw14",
  "key13": "4yHWM2V7XEyrpCqKBPVYupbvXtKBRS5W84N1Ym3wzjCReugj4kDiCiZQNeHz68tpakGYeQFZ7eDVAD9yT2S4Cyiv",
  "key14": "3VWgib3wUKhbtrqXwssoXJARPvdENeem5Cang5bG6EDPHfK99tHNPuywwhtstCPYBxsWBVBsjwnBR7PuAp7ftCB1",
  "key15": "YJQxiZwmyrrvZeuAFxKozobRLEhHqasQBYHXFQ7QWKB5jPs3LNLpDW7VY5iTgcLBahR9zdbTYCznB55yoYotB3G",
  "key16": "DjgsthykVDbQvqhXqxfgWFVhS2Ja8recwjeJfTbT7Z3GMcLQgxfxWkr4RxYfDBqA7TmqcAqnwuA38dNh6RredFz",
  "key17": "5bCqZYu5xUhY4534aBxgTV8cmNZnXkyfb7CdP9eywCyVRGsFLiUonrn9X3yhAaNerEbeTgKu1xQCQEvSUeHtRdWn",
  "key18": "u62PsLSiLPj6zjDn6yfnqYnHLURNzgbpJvHyGUW6x5t1VKC1opvvDaijc5uiy6DLfg3A7gZkCpZMaWFQQGQ3hTf",
  "key19": "3f17XR29v7f3HWrqMy6eCfQ4u56ogPymHiTNrVzQjbphZ5qbCobG7xHhcDDPKDZvzwaX3KHKYUpaUFSyxGck55uT",
  "key20": "5G2L9E7VLEsq6LvdhfR2CvdFtyehtdpzs4JwKjTd6YuUgAnkRuMPyszLQsJXwsNnoAu648ksWDqqfb3xABRCe1eZ",
  "key21": "GHaRvwUJ9wbHWTBumhwhuxt5gfw2rcp3uRDYBSbHwyvysVRoxL22oGowXCekWthUqjqAryfNgxnQZtyW3Uf8A9e",
  "key22": "4pYjjjQjzgnfXUeam2TiBiURdXyVYhKSTu9NcAyijrNFc6jTSGaJVRy6JoA17DxT1tZTtgQ9qtaEcrue3gTxDAWT",
  "key23": "3vNevytGagU3nYc9yMuVC8qitg35apPeWyXaV2HR38ZjJMp641Qyzg1oVSGYrMm9NsLSz5FSCfegvFhKsU4Mw6ZP",
  "key24": "4DLUomQy4kkxfNcjUy6CDtUbeSXMQDsjDxwdkHXF3iaCqLdx7cS7DWTUvh8b8uS7UDFirXJddpHpn6DpUzrgArip",
  "key25": "3SkpBjA8yNViQcfGzCC9cxTBZ4yMjVXen1rMmYETjqbX4Atgmx8wroyrXvWGVWU4USp7etRHbVg5SwkL7ifG1iUS",
  "key26": "4qkXxvpUb3EARzXoeunidA2shjGCp4wJkk38tpNKGwKv2jdmvTs3o9nFT6vxodjkaitZK9DTLTsRLNTT5iKCbE5k",
  "key27": "3HK1ZzwpMjaAfbzWLtmktuvNdjTvqQobyRRFRn53FP31feNiijSbPmiJNtuqMnFZDuuJKDb6bRCDNdWPSKzrv3S7",
  "key28": "KQeuNCm3q7sv7vfpiVnmtE6v5uHm3sn72Wncb14CSo4UkzrrSYZn9egmkDRRwEGNw3gYRekWWnhpinTk1yHbNPz",
  "key29": "3sVALko3ctSrBa5FdskZR5iTDopHxJ5xvsm1PZqUBUsCGgi2y2X7jovB4SEnZxbWHuNq1wzPU3g7DyhNxmcZXspe",
  "key30": "5jJQckFoJa4U3Q2ofvvxjMf8h8Lb8WYj3Tyfs55UN7hdmVgMcUrQmax66Yt8nzUtstWbghLWNbXgvikydumMaKbG"
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
