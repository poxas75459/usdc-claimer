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
    "Jj8viXaLP1WMXirXJEeyAaMHcCtSuxbHyrrpftYK6Qmd3wabjEtV8coL98sEcBNBvxC7QNW1toFkpL1zH87oG4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHyS9xRhdKSzUzC1dpe3mpZXxY6ZC8GyzRatDs268hNiRFnzJGvfM5rDU3uYT7vWjjcHShEt4MXDupdmxf4TsLo",
  "key1": "35A4Eho6uoQLCvKoGDeHk3P3v65Tpq9doY35Z911K8fDGb5dtJCMk3vk4akehckwjCxcvmWPtwySPKfg8qWkLCLM",
  "key2": "pvMaj4kgvYn79TJSWB9eVwunfj1duTU48XaAm7J7XmpPps1w9xfmAPtrGMBcDxjihT4wvftLWFcmRjP8msVAfEb",
  "key3": "rnv9j4Mjf8MstCdgNkYGYkpdbDZYVQiqcCnhNHF49DzAhQmSVx2wEg4jE2x7wGAaRfEpGyTh84m7QvofzeEzH93",
  "key4": "TMJps9DgUE7p2LjGc6bs4BiVgpBPSRgSWN28LWskeRZ9SNUnHDFZvqgWbKwRwhACymrWXUqhYP358DMcve6CoPR",
  "key5": "4mEaYmR49RzFSGPugfRpjipCPhqVXMj5CXtP3eJCyzGdTY8soYkTDKinbS54yhmqnB1RJs22bGL3jeXjccMfasQN",
  "key6": "5qpfUCm3subkdEMz6kRyvKobdSPfVEbwp3wE9ycrEEUnQwfSUVe2ZteYNAwXFMmKtwZkh5w37XS9SThPnakkSiat",
  "key7": "3EMRb93AqMo11GspL6v7DPjRv35QCbumEHBr8NLYRmZ8cDN8D3W2ShvjKEr5nSVtsRuALjyAVxdbtnyUCmAVY3dy",
  "key8": "2EpgncNkhiFuf52jFBGCtr53HXbU4skzLVHQS4L66ko3x6DKYgeqfut4Rv3ZwMR6WqSztrhSorEhTvzACb8egDjD",
  "key9": "4BDiA9pER9fTLwqdaumde9fME6WLRt7116f4gKULeD1rrTmVKBjE1jkyJm38BfKybwza4Uf9WdWPzRCYMXTz7Qoh",
  "key10": "5m4n42bKhhcVBn18sNRrwS2R5wCVaUZzfczoe7ySi1eSpUsgfqLNXASk3HHMAQLQ9yjnfY89q77h7rfsSMgsVcYW",
  "key11": "2QJMWJucquuoZJq6AjBEXPsxc33vet6Zm4ufKh3ZyTRSegemxqhAcfpkeyzUWYTHGC9JCfnm99TdsA96bv8RYdVd",
  "key12": "2XyQZY5WAWtz6BWwKUxWEFLvcxE3BojE2QPwFc7YQs65HWQUGQTBr7XfxNzbFZNknKGNPexpiHn2ZAki8AcZ3Nps",
  "key13": "2qmv6yLxmvf147eeQSTaRmMWeWQh3dqYxALsBMxe8zAMCBGL5ysQbtbJCSJtuSHFCjXxkmedDg8BGN6yjkwdp1qg",
  "key14": "4iGyJcTpV4aQJkG4BxLkV7W35MXbKMmyqfZrAJ5Bnm8f4C4uLwx5vXdjSqdj1uFooLTu4nTRDPF69sYXjf6yjtuq",
  "key15": "4iHVKCokv4qFFR1YSQXJte7ftyxcfzMAtgwv4pz1LJJJAmrRMLzoYAioW3BK8S6nY9SUshvVnppDXsg3GUXi8g4Z",
  "key16": "2t56UESbGkTjtzvq2yFrexj6wifv1r8dfLihBHR8aq6t4iy1Zm34VFyYsBxuiMvdvMebDeEtuehQ4xXVaXunQYT8",
  "key17": "4h3oFPPTQZ9ozPvu1ZVvh8UmVufkHpmRLMmWBeMurR4vvqMbWAnzojn1AwNNtMKhdFLxLJvyGFwSbX8DbGAMAkq3",
  "key18": "2wuuZb2L7mQuRyQAeSzzWfJzzK21JUTcLdcgz5eMoAMsoaavvTZctSQ3sW4RPjbrjyG26BV3FyyYdNmYMVCxZuGY",
  "key19": "4GAuUhA5UtaDTG2AZwj8Wfh7d6Nfvb2zPMcjwdfCpv4HAxen6qGk5zEdzzspEVMyzEAzNn3sjZ2KiAiksM2awbJW",
  "key20": "3yXthPQwfY8GFEjBcrzxN77nDkwnUZShCzTtSq5VuMYBqhyhY81uWvSLGC3zo2oU8VA4NjidNzd6yBbjGQng1Hc2",
  "key21": "3LyjHSUyk5ViLVTw8GBeJ62MfHNBqd4AAByF3STqhESJ8kb7iHXyCCCMoYqdpdLKN64RfDdrdRiMA7mdPQ1DNhdz",
  "key22": "3M5fv96WjBXME8VTfkyuAcGqrPKbriHiudMLGN49UpnevqFCzvZwsYAkzsbuYi5P7SkCUs2VPq3eRti3VFZYzjx4",
  "key23": "5oWQrXCofqQhXi1JhECo9onvzFDaHCzJLp9pG7mFqhVPunwGtuFFixaNLnraA6yBEDeidbZHKia1d9b6DXErw87f",
  "key24": "3C98absV7HabPwmfWaMN4hMbg9mgmtGd5KVbybwiJzQGxxTHoqCvA4iSWqJUo8jd4yEKSK3facysB5Kh2bXvvCzt",
  "key25": "2fTaWRSgXexBX21xfvPjD5xynGkfV41z9h3oqjmJRNXt5CUntxixviuR4zcW1CkrA8X21Vq36yXfXa98B9Nmx7C3",
  "key26": "jDvtgVZ3xQWsHUcHzUiJ3xaGfS89NFA93P4PhS1PXb7Dr5CSgrKr2FBCKoaXb1W9TpDgCyrvm7bU2BVGnsQ3KLN",
  "key27": "3WjUmD9pFSLGVrDHLXwfPdhjShq1Z3vsahYDEynov7WHfpmsW5qy9GrKgMNmL99ieN55TSaZavn5CYmwfsERuXCk",
  "key28": "5pMKjDTSQWi32Vr8NkscNycgc8gQWL5qAATvsEamYXXzsycYBYmrvEVmeUNR9d76NXSNQBar9uqyfuQniH17HYZb",
  "key29": "YGerCwHoJYT8ZheZEPPiJVDYRN82ziDcgmV9j93oQCQPMjH6vehTdgE5auW3Av1rqoojhXLDdtNbFe6RtjPb1tF",
  "key30": "zEpv6qfVT9oPvJ84jvDC8QFBweTK5i1nhmKLvHEct94djKBgFUP1qGPXYDAZNLCEs2siWFzmhbK24tm7mVQYgpX",
  "key31": "4v4vyjZS5tGMbbNt7swHKgSpojK9vC7NzsktPAWiD8YMkM5fZPRr7NjYrq5dgjXJ1fGoGbXaM59xMowdDfKQwP19",
  "key32": "h75rPtWKAGSfWJ6xg2RiKABTPm1UwhL4pvGgxABBNqW4kbys6zGBMLYFusGKjBBSr83j9fyZ1oFDy3dYo7R2CNG",
  "key33": "5EA8hR8F3aV2N2YSotGPgDqdejGWTuUtfG6pkN6edff1MFw7q9PLaaR36NTt2u4HJgp51LkTk7qY2C7d87oAhfcU"
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
