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
    "4aBKi4Tqnj88zDp1SrbMenm3N7DXng2cRnTH9judHaEidNYRYUWhcbYfKcNKxwB8dD7iqyjZwasvDVdwsWtF6nqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujTa6b85QZCybjmd6AtrgPN1Qwa9vm6rMniiWCntTPRN1pPcG9ZDsJMMDg9hDH2EvqZr3nNQbPoBbWETt4QXPxT",
  "key1": "2rD4vAUDAuWnqJynKrfCSo4hE8GDWP8w8ZFS3eBoqz23XMo1CfrkFtE3LLurJQ4g4srPZq1AfNnfyz1UjEKiMcRj",
  "key2": "29uRqe3W6HQdXxwsjCdRqduMU1B2gRcofDfyF4e7aTtERYwaCTjm29w68oFJP1cLd9UYMUxzmgZSDB2asT9uApKa",
  "key3": "3PmjUCTHEy1mJhQCbFYWxshEFZLSVgwRzcRBA6MEE5hDyzddQ7GzczvrZhsHNg69pPtyYgJCZujUYXHMqT65Nin3",
  "key4": "4wv8VsV75AXdomQZrGgQKXH6bAA9gQB76YAeGA5yUWY6YF7skF7sUbDVUVQsyuFc5cdfWcRXaaoDFA9quSCoCvmv",
  "key5": "4izou7naoZ2ktyho9EgGG8XAVc5vgWJccVBJuE8AFkpvUzE7WTEH9iiME3iHtCABofMbHnN52YZeQ1hX828ieaKk",
  "key6": "3RFEQYA5gVjiWn8eQAwbxC2gSh7F3yjX8cr9UtVFcZvnW5mGvgiiTDjBtHxMTZPV3h3G4pKXmjK6WySHXgHS6xhY",
  "key7": "3Cgsu9rXXiT3CrYqCztiDWGo3hZ7qxtTXp3cB6JABh7tGkRpnH3LYBP2pys7etczBMkioqFDFThkGS4i54taPuUU",
  "key8": "4mC8sXsJnBGZ8i1xYCuLVsTeZwVmL8AGqBcE61KhGoV6ki8MFA66URUt2CkYznFm6Pf7R11UgAkLcXy9BNWge5vb",
  "key9": "5iXjZhGEdHh6brDPFAk2SSrExt1PpqeCRUp3w82a6bfQcL4XevNGgEiwQNLHfNbRFzCEWomThdbc39R8ZHofrooo",
  "key10": "Jt2CEJcJA7xzp65BrLjvCxjeJ2RUjo7so9fyZ17SrcV13HDsNXeugw9SvxGU65AqjReLemALG5KLw4kR8yRHBZE",
  "key11": "3hJxckofpZr259Kv7nuMyHMa1Kd3Xi7mdyxMaywLsgCUiovkoiaJdGFB181PcpsgpXPfHsdWRUxa1FG4r47qx7EP",
  "key12": "57XFZQK8TaKV7zEtzJDxRxngdCMChs1rXpA2QFyLbeBJcuDss5vfuLBTmaB6cGRGSzsrh63dGdVhiGBvMcB37Kf7",
  "key13": "5k8L9LKmL2T4te27QyETUK5UWhxCoufVJ3943XfKhohSFuCmy4pHh84H7za7rrjKeueD1kt8LFpScLVZTkdXGQKT",
  "key14": "ojhnNunwjJiPuwPoKprpy96HZTfxJqqGjEfJ7uehd55mWSk31kSzV2F9kcinyL1KSJHtYbs1xDVKm7TWVuL8MDo",
  "key15": "5wVosoUmXnbKrzXB22nqPdSExakeC3SozuHGfq4abGC8Uh6J3guxBj1w9QxjB5LkXdKuiTnJj5LnzvuwTqHHewdx",
  "key16": "5AkpnMenhT52XnuUGMbgTSbuUM5fp2XFWhfwT26mYbnGjCLu5XM6KBJRQLLCiuvqaDbUr5XMKYKSTHAW3LLubBQs",
  "key17": "3XfBnBYo8pcjGUSVgPMxz5TDhJbgBGPbvAbdKtcbCJBcrLFCjPjZPkCoQe2G7R4R3gNq7ecenxarx3tzQtbPrkc5",
  "key18": "4gt4hXCxZueW4vZ6Z7Aqhfmz9oebYCmaQAB8oZhUbp2y9thxLri6FXTnjGaWJuF1uVw5ehjgxnS2VQSyN887jrcR",
  "key19": "5j7j6Bs45C6u3bnJMkCEdaGDgCt9jUyo6gxuJ4zETUHAcmE9yR3qLJD2BaZEWkWaHvELT7iY1fedHKa3fqf6w6AP",
  "key20": "5uzuNeUs2KSms2yg5Ubw3CwMYWkZ7X322nsEH26mPGURBjEZzyx3MyG9NVSowkm1YUQ1KcycWdcPLwH7SpVbZBE8",
  "key21": "5vjauqzBriWvHDh5pf5YnucAqJSbjiMj9eJU15XT83VHGFicqQCaKJxqh5HuBVfbzcrvZaFftsnEUyWVDynfz8io",
  "key22": "2RgxincBZNnrpi5Ma6efQD7muKp23LyXK6a3Zv57xrLDHZp8UbpETenmbZSZ8P35CPytGwhBw7GfPbjKfVDWt1uv",
  "key23": "fKcvetYuFS9qE36AoX8UPmLNy6XkfXYyfpgFp6i26Y6wY5ypX33xnVKaD9hmHu4eeqKCF5cfpqUk7fM7SMNGoXH",
  "key24": "CUYvE3dS4b6jxeKPpRV9oyiXykdBDrmHSyeZVza4jbDsioaZ52EkyYSggUX9veG6uamX884eCWSRna2v8C5o7cN",
  "key25": "3TCvx6fNRrKMFY9PexVdLh388vyquiRDnPaLCQgwCHn9Wi43955jdfgg8ieoUz6vs35jkHyMArtxaMzecsouhXuG",
  "key26": "kSFvq2AkPAj9PLWurVuocKiADtriQyR9teAoda56KMS1s998voZAAvVRhR3rBTenJRAcCvxLjDUSmoaAqweuzfF",
  "key27": "2AjgBTuh4ARX4BuihVSJHdoD9oPVQrQoyjxW5eQx7sp8mjf5evCSVALvZK5ytDGRzvgySrdU1wu7MU7FCrkjmdbk",
  "key28": "4Ri4bbszcXMTenEYjBewst5gX1NnNLJS3fKA5qRmLKGCVB18M6f6scfMs6RdUw1fdnFJnMjzc6SPpM3K8WrweF8e",
  "key29": "3yqFQfjaiDz82JwyQBGmRaSWSd7DKFA36hLuPRAoA9J7qE4uCesCHvkVPr3EF54M83JhKo346d2pz9aastJTLMJT",
  "key30": "2oKxE9NwyHBUdCX5u7YEN2JjYzYRB9BeNLwg5SkPciGLYAVgNUW9mSRJUn3WnuakB3zErTyFcAQdn8SMRRMfoGa2",
  "key31": "jWX6biVyC6mSWLyfxeSTPjFSNfWoF95DMWFWX2rxUkQMW3D77trHQf8PpzK2nbk4j17sZMe1z9G291WMieayxAb",
  "key32": "3HzNxHB2mHCxJohJg7Nq7ENJgRpx3XoX6Pp2ZNhLqCMDewV4pcT8kE5BrA11WcG2GLNrMq61p4NFo13MEVXSA9Fe",
  "key33": "4G33NbaGGNX1F7JnRExhoboJprJ6SQJStogC4tqRdAnoWaQUFvY4YrsJ6BXsQQ8VCB7FsKB9E3seGCzaLUa5yCa"
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
