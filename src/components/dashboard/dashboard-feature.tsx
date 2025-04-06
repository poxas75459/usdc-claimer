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
    "HUFyxDTFEU6iz8nFQ18M9GfBC8rD1EqQojES7az7g3RN9RttY3q65hwjSCaaGGApkvVLNzmZ8ZueLkrz8oLxyXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTbsDQL6Ku2qduKmC1LnV5JFJSkPAjq31BUcP2zL7HTm2pJHBxAiFTMGU19iamvqRL3tqLoAzqQv3oNVYS8XhPA",
  "key1": "3QRWH1CMyTAoTk1WToD1duTzdm92Q977TemuTJ1MgorA1aJhKaG9T97Zd5P9hosNvxWSRsD9oPBRvHtEKy2AVKXD",
  "key2": "3H5jXn747mPXHBkeNDzC4wTBUaa1NmoQDeo8iEKcyFwbstpM9f6qaUCn1dB5Pd373TUoVZLZkXBa4Ddn5zWziWkM",
  "key3": "5ZJ2fK5PcYLKtvajNYhQzX3Y1T3ZC391XmCJqSJSM3pHTW4oJeRXLqPe6Ba1RaEc713FFnp1hQQDB3wyy4qXcX2S",
  "key4": "5MspW81JXe3d1QW73JHxQtzt1c3RoRuZMgKTpZTDPp697r3v5qMb16RT7CrKudTkTHvX4D1qDXBqp1zVntKNNcJU",
  "key5": "5nEXLVsRTsAcLjUsWeho6EiD5iD6KfttURgBk2GQr5GQszA2F4J2qcBNKMQvc6RYT79cmQtBEA5FdvSjWJhw5T8T",
  "key6": "4FKWbqFiVGEFsYjipTAxhwXLyiz3h6akYtoDS1CX9NNzFTeFJ7QuLBCFbRzkgBtY83dKmBTptpk2rmnG5Tebp4Rn",
  "key7": "35v7GLWkwpxz7JBjZmqc9ZRhgfkBCDayfQuVfQAmNsGeQGxPtoy3xN1t3s8iYAi2PcPEDkwA5yN1A9UoFZC4KBNT",
  "key8": "x5uJ8c9Gh1HqitVGG68MfbsXGK6ryXitxZ3fq9ok7rGzgPXfrqP4Y87Brhow3p6G8DZ4ceFzHotcMK6HPhMHxGM",
  "key9": "u7rPXcHG11oPDzueFXye2CKAEfaB3r4K8Zk1HaoNic3V1FnX7hQ53iiCiJytK2Da5bdV1ud8GnsdVWqvqxdseu4",
  "key10": "5z5DUqdvEiwtRymekNR3oCGmtKM5hYpKm79WSK3joP9V4WHhGfbFCn3PHQazQ8A1o7MHp84cuprgQr348EUi8kQY",
  "key11": "5eqZ79nfeEtJajBv6KMVyhD45N5G1pwkpynWdZMHd2W3YckSoCRyQshQwPKP7P6fUhnuD9N4k16vMNwJApdbdpjz",
  "key12": "ujVHmreKxZKXXw74tDcJmzfF5QjQoQ9nwyAP8GoW2r9EtUDBcikRraWavp3qGRnSMX336ofAFzKm2hiCCBxX9sw",
  "key13": "3n58oeSrNZgcStUTfFdKRSThfnPbddKbntHJDobjxu8omkUnHpgDSthjn29mGaGPX2fSNGhcCHZXbC5BcunvCpVZ",
  "key14": "3LHkruDZciYVNweHzSdhgoRrRWo5n4nuokjXpWPfdp3LXFFR2fpszWUA887M3zFonRC83zuFJC9mJBTTBf8fDQta",
  "key15": "2PEcHatUwySpZM2YykbzBQvgGzU9461dVbjYPocMoo5gY2XPhAHiob45FZHMoSkSR7AwriFSMSygtgEHFVijKycb",
  "key16": "58NAde6Xc8hW8Emb3uKtjGCu8WDMfKfjZZpmpRyxnGA5vgGcu2gaq99m2V4WEh7LdptNkJDiXRg8uDU44CxuroGR",
  "key17": "4bMghEzt3x1Sr7ps2kKZjPX9FsMs7xCFhT87CZfbN7rvGryo4jGzWssqeQtwu9zSQyLKjtcSMzahqcqTyhvdFFJ1",
  "key18": "2tSecGSt5pyERaWVsWeb3MK6AxQDZM8pBHr7Y3nHgPyVCoBdrP6ZxbGTSvCu79iyMegXTBivbkWnMr1UXqodZyTe",
  "key19": "3DXWYc3WJ6cNETG77vbu4C5UyH7RTr76QypgihM5r6kQ5Qhi5zmXGE3FG2UFqkhy9seA3g9BsVTZeU8562JNE3wr",
  "key20": "aQ457ENu6ArB4CTD9tQPhuKaoc1xwpM6yxcTHCWFe2S5V2g3cx5n1bt8BYTyLwKYkiYmVgkMUSUUDBRqxxdnbw6",
  "key21": "2TMDyKKVgpZwCKn36iECMKUUsyLU4jf7CoYeewCBqr4icaMs5DFTVKzZuByBYiCeHNcx41wJZKirvBjULACNud4j",
  "key22": "3J9Br6HAhjX8NxXxdDV9ZqVJjRdXWdYpjBu4j8hWsdAtM79VBoKcL3QtXKqEJ38CA2wmSXKt1d2xQjVHZMyoVVsb",
  "key23": "3Vqp9W78oMANzgmSA81B8ZAY9fEEH51iQapuL8z77wWCh3sBh7ebs5EwCYWiHELnZG4KCNdCH1EbNDCHTXCQJWXq",
  "key24": "3wkD9Q99JiC2h2cKCn687jTVEMYhLPUFmtyis7tE1Fm4njuyKgdEuGdJD85Duf3TmSCebFSsN3avsrXepc7HP2t9",
  "key25": "2KvhabhFiTPFmDmmbjkSGbN19LLUf94XeYjD1xTTGWAP3KABbjALAHLDxve2844azvWsRNUei7xEU54jYHkJ77JV",
  "key26": "4x6oEKdjh4QW31LRpxcPnuYxukMJahKb9hPDUtmdVcJnVEdBkdVjEqpAnjkLEHaSpqv7Cfk5G7PoAVSNoxZMiXS",
  "key27": "2CmRPxuoWAS1DkWp5UX8BcBFXbwwpK3J7aqgVUZMUit3hejjcpMPJuFwW7pfsfQeFtrC6tz6cSRw61F6Wca56atb",
  "key28": "oLBPTszqq3fLfudasJyCJnMbDscZ5wjWoD7EzDxDdz7WvCq4wQ8Vc2QNTWuYkhmPjf5eGezSa23qp6zNpjE3WWQ",
  "key29": "3HhGyR7mpYD1ownfXLRJKT7ZY2nU8w3go2SHpRVjwXc6YoJnq6Sp659Pbt5L8xgf1Y6XgQX589SLk1fgqio7KKAg"
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
