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
    "HVAxrD5auYzNu4p1CKvDe9iBRsaaatY7kBiHHSNFwaU6ehAHHzsX1rcCHCFHGumtQBwwpjfJor53YvRs5879VAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hwQhcz9QNNYWnW3CXRraBMot6Qt6Fnn3uKqDF5ZBB3DJSb2jNVEovUELdKrA2XUd2AxuWmHrXECzyubjAbg3hW",
  "key1": "2rZNbzNT68gTSZW63J3sgoUqndXxMWwuAiWTpRVwgVc8x3RRWV4kzzuHEZ4MtSo1dKfF9hcDvFLCeHFpADHxxwtS",
  "key2": "3YMEYKamdJ9g5PUnpqXRitDMVW1bgRD73d977DQx4YS2LTwzsS5nP9LhJ1xtkyrY9pjnMPFMBmFEv2HFzFnR71bd",
  "key3": "2V3dsxQeqa6AuFiDoMwBPS4Ha55LSvZKZqoiitKFfw7ZF9ZSZMki4hfwLQweTV2iGpaijhasJbATRAYmqk5h3c8R",
  "key4": "49R6MV5jvU4Qamdw6gjhV7aTLTVFnvdGjFhSLnqP4eqUbCTbCsCTdNycjTParHjDGsiadrJxAjqzzdgU3TQftTnE",
  "key5": "BoNm6b97udpLerLeT4F7Hg5mdJcemjotSac7HEwYf8DvDRmkSpUTvMKUYn8n281hKAxkhwyqDTmZkcA1jsyf1Bs",
  "key6": "58EJrMCK7zeMiWBTNhXi3RoRzLZduwdkhZgRgHZUdbZvEHeEHKaSDxzdDwVWgLtx7Z4q2s6BCRNP6dYDcVNp4tGx",
  "key7": "2pPNfW4CK6NigwiUEjAE6apohnuKYWnWveHWn2Lsug1X4ZWA9T4UkqM5Si32PdAJxCy9yH9a1yBip7Xg4kKtgeTR",
  "key8": "2sbssvxbvW7z8TEWT54SscJQbrrvT8F9TeFSZCYxis2C5Su3tFEykX91rMpLij9wgwQamTsFT79rPNX83ZsGmrqs",
  "key9": "grWE45KZPwF7drpSbvJiXAQv5ESiyH3mBVZGYFW5E2UEUnZeZmZgEX86BcDVm2vGCcRfw3hrV3dFxTKdiRfTym8",
  "key10": "5g5rCkbS1dNazjmk58GKUNjGasjEvViz681kLFNzMi2Yt2knmiv66chVMXW3CSh8oTnsHZYfsc2e2H9dqLXGg8yY",
  "key11": "jbYqD1aznj6i67phiutRCeTdmkhpYN1rePxNPATGm9DnAwAkte1bcPF7XcxYoXRCnhUE2xRC6ypnCXcZeHoNNsz",
  "key12": "oV6xvRZo9bReNJDKJteRvQuvUe2tK7pBhC9w2j4UbkQeyEdMv4kVF66tgDSzixhHcgtW8cKz2mw1RJHNwYGsZDb",
  "key13": "2sbr5ZBVZE5wkYNftedeq8g4od4MepJrRTTzbWnuMiGe3iLzL6RiWk88qyxzQ6u32sH351Z2x7Wy7CTwDtJ7Ch9L",
  "key14": "vsGAfRyZiUeQUW4HEVSCvr5gacHTgPPEcNE6oGrPuT7qNqxNHK5kapbvy2ACD4Zp3hKFnBJzdWdNgT2cSjTvgaQ",
  "key15": "5c1koo912WdzTT3ZCcQZTxi5mYrxUX4cc5xVCXarZLfsAxFeBTukC7L3ShX3LsZqJV4P1nRsfLGGKZet4SPc49Bw",
  "key16": "2U7E1ZEPngbViH2iRA2VGfqcZZD5WHuwob3JjBntoN1jYCQqWsrtE6bJc8zBe9fvsrmKW6AiY3GeeR1jJEr3cics",
  "key17": "36iTzUTfo9iCmd2tEXSFAtqJ3gHsLGascnKprZa316mCzYcVm7j2pdmbA6PkwCPcEDUscRuB2swYarig4JZj6RDx",
  "key18": "2DH3eiVZg25S4ZGuRAWQezH9xxHrwDn2HnvsPxMXsUBkBrSji1nk6fbtLmAAPMgQqtTanvRzajYvQNjxCdHX1SMw",
  "key19": "3NbXupAodKRV7BjLzSSBspfcfbEdVoMVtbw4ceGA2mvmEooyWA5st5hCV8Gpi9H4fBTWWr1eJF1o4wuaRKD8iuJz",
  "key20": "3sYFfzy9SyvtSCqRmiPzy2x5APZ9QCJTsdNpXRChKH863U2CFyCefDCA3DnC5D3TaMgJnTsjdgvCkyvHkDbCdKtu",
  "key21": "3pSABNydRkZo8SeLhuovz2KoAwy4LoNyU76H8CHwwL89rJ5id3XJkZTCL1dMCSzvesiBTxuPVdPAhdAJyjUncnWz",
  "key22": "67LbsmkxmkZSzwKGkWCusnMr2ma4HLBFsZgTEbrntt1pD17ZNdcgzP6L73UMVMSyCFNGptvq2ABgYexXbRM4ig7G",
  "key23": "rsm6eWt8C8okWhCEGWn3NMPfho4t4BTAyW8vbdzUpG3X6KmpyupqqePSnwvSztpCtCgeCsueHDNz4U7BMXapfJW",
  "key24": "2AN2h21CQSKyN2xZkCtTZqydPbfadZP3SLGrYthR5pf8H4zvS9ZFMXq3ePxobk84jERiq4V1QSFdVpVghNjTPPsK",
  "key25": "2haBJp53mLX3rd831KNwuMXbYbkiTpH4ouJ8T4f56V1B8XXnMbZ5Nkva49vPwKwhXyVds9GZ6vBNc2xVCdsFSZ47",
  "key26": "3E18i2Vn7ignxtYagDrpN2nNfmu5tJDWCRF1De6vUP2gXD5bf9bwPgLaQb5wbcqiNF7sVPMR5EYjyFcZ73uujhpW",
  "key27": "5HEQ71qmsiSW1bfFtwNrCvtgfV6EEV4mCph9K5kj4SSpxddiuPaGsDefaZhHbCvzkqxYp4eqZjBurX8upSVqzAmC"
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
