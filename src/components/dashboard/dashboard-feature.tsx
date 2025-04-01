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
    "5NGNPQmnm3Lefu59LoE4SBxSrmsWeDv4nU2gGtPdehieCswT8R5G3rUzniAt3sdjabX2uwMH4j3vt9cKacEDSq6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vauYS7JrKnYemvgdyYGMxGPG5AkzaE8iz6uM7XMBbSe2kquDFBQtq15X1KucjytA7W1JMTRypzHH7S2s7j29SMP",
  "key1": "srY3rRD9VuqqEN3tDtqBrpqavJBkmchVmmv9Buj6mma3X5LYhoDz11uFjgB8Xg56p2WmfsXyAFcXTD1G1Po5ode",
  "key2": "3qkhJEm4RBCPHjPx2KEMtvt3HzmTptMUn1Vs62MPYWz2hoi91D2GRqYG8FrgiDNeNMa3Gomw9XvfV27Hsi8Vw7Fc",
  "key3": "pYoYnCFKCCaXJ1esU6cMGvKxrWVpM2B3hLwLdWrX4r6qrcrzG3uJihCE6cH8o4ZEGmxDvjZ6hRD3tDoY15EJmAE",
  "key4": "2ZAm1zJccLufsxJS36ra2x6hX4qcqB56Z6S8ZXA1ZFd6LKa5JTZdgB16Xk6Zk3VCpnzDPVaGuCwPsckentBRwCav",
  "key5": "28LPhQ1fSVbqnACxYYHjyAXbTFkBXuhh88kdF6GpkExwLAMouHCvDYQiQJx7P4ACxmEGV182GaduP6QH71iZHcQt",
  "key6": "2D9YtcUA12rRUeBaDn7UVmGr1YjXCzxd9dpNHBjtzKkL4Ue2Kf3y7p6nB6S4sDYF8WrckuiqftDqzhBHRsH16r38",
  "key7": "aoggg3MgVsDap9LTMU4rVRd4gdA7ejwzJmu2BFQwaepQqAuYr1DqjyRAHA59QH9epE6dG6tq2wh658eVDucKCB9",
  "key8": "6YHqnPE664LeWzap6Sfeg1CvcynbjgSzQn8Zvp69yRqMDHHERy9y8aF4gQ6VWmHgVxPW6BWR4Qrb6Sr7veXpMHA",
  "key9": "2usDaMFNtg2dMycPD5EfpB2UqBtmyBa8ArwzzhNXhGC5KK129NpzSU5P154UB2PorZKJdZipksCrhvybhuA54V98",
  "key10": "5Nr64uuAjFgau2P7k5fPZAriahyDd6GhUG2ZvQe5PiNCgDpHQeqWh6dpNrfsXb7fYU26B6QYrvSaq9XGXRriuBJh",
  "key11": "2DCBxDBr7urRbx6aZGScBPCyE7DXKoaWXKAe8wKsRw418G25s79KEfusX9cq6ZN41hMsCVUNM7jEadxbHDvGQCDr",
  "key12": "3tPDhh2NA6KND6MTWWKJgkJP5eoTSGbT8TwPnpNkJ1W4XQpPJce5u6QhsmFxszCuwyqk1TTa6XQhd88yCvSeeSmT",
  "key13": "5MkwET6goQpBSHasz6weQYUo8DP5ukZfDqRm4r7phfM8VSTUDh3zUNBSGrE8omUYm2vLEbKaa1zFMAazD1L9PC2T",
  "key14": "bz9U75Fuz6QPXoNbevH7n2vkdg9s4Sxeezrj2C43ifzqvo1YG8AfRMJyEZZ3XEBRvnXMeQVAjXBm8Xf4p3mEHQ7",
  "key15": "FFtAvkqv3HGhUySbRvZDDJBuohksDKbi2uLcHpcUatygk7fnXuherhfFt5pXnf6sUBNMSY5ATjgXNZfB2Kuj7cr",
  "key16": "MGThNuXGK31cQQx2XMhn2ZUfufKxjokuvMHkDVJWXvzE8Ff3dot2Ud1WHYx91VdrXhGNxmLwKCCEDDDaC532cJp",
  "key17": "41FmY47NroXGpLbe27MAkdcWEegJzSxUiTPF1qmGcV1WJa9Y3taMeA7oYwaV7L3mTpXazY3xosZXzgPXgHF5CMsV",
  "key18": "NnVB1gafLpedAPDbCNvjxdyHNeiBh8VRdtaDmpHTn7quJNmXmKQY47aF9twrRjAWmpj9detpsRtypFkjqmBEcWK",
  "key19": "rCdmsVBmeq77yddhCcnbbs5KkY6BwL1nyYmpBp19PZvXy7ckNtPpqvSrwqVxkMYBU2LMaCkztmjD14KdtLZnC1m",
  "key20": "5Hh7opefS3bbzZWvYBZFTyLLV1xsXHWpPJXtXWgq9rtFKC4K724oRDSYndc2XUmSJt9VpacjvbAoKt9bHpC2r1R3",
  "key21": "4w39V85HvnGZF8QRZJx7NHUKkeTTANGJJAVzApkqtJBFfFbKJm54MFsJFmDYDwgUwVni9zJyae68VcYubT454ybD",
  "key22": "3LhkQU1uwprWFQxPVSr41dPFjn2P6UZegKPfM4DfWDMUj593wntjztWF5LqQDtgc3HzrguDwt2FXcDAo6tsW68i7",
  "key23": "4xvu4uRPf2ThMRZMkFJaTvFEb1Qst9mt5CuVXNMYHadimf6bdus7SstZwgMAHoUFnDLUe5ET9orgcz1gJHcYJVUx",
  "key24": "4yuBn5e5juBLoLFE9cUBLg1BcNBFEcLmRnt2jaP7wWoQ2V51sWP4fdGrkf4jkYXRKXBbe7J1APWdFvdGxKyuQ4B4",
  "key25": "ZxmEBz3VPZrRCKVk2m8brCNRrsLBch8esQ4cMFQosN7zJakWw1taLDw2N7NKZsjf4PC9DRhuK7Zvc9G9fMcwQza",
  "key26": "33wTGZdGLezMp267tikEp4tR75gZxYwhXdbDUA57G8rM1wPYZMuFitxUEAisV1yJ195ZNwjLKxozGu5faQqGjG7",
  "key27": "gUmSBGyeNBnv2mLVoFx4jUHFtbRa1B2v2DbLjA6ctgr1yvFi5DEgYjXrafeda5cuQEiX2p1VhsQvfmoGH1zRG5D",
  "key28": "2nhj77ZJaFYxzSnAXHurDJSHqGAqoH9oJLGd9ABY4tyuSGPeYKM4xtwiMighvkNNEYLRppCzCikLR7aYkkCxb8mE",
  "key29": "5idHkBXmezLEwkhFaktVJYcWUh63ps3FeyubNsTobiUv8smoxsk2Rtoah3L7aS6T9TCCDQzRsdiLpsBu2tXdJGFd",
  "key30": "3ppH2hYLxHmivecN2Bg5engjSiisZhtzeLW7TM8zn6kv76bMbqQf3Pc9mn1v62UuEytTeZxLGLEfwsvZ1gxC299B",
  "key31": "3cS1YR11Gg5VC7jrQPZQY24nEUSCLj2pYu9mnfiiFSq7bSUG5ogXjn1CPyHPA2JRasDv7jjt33XLkgKKACoXi5Wx",
  "key32": "21Eg2FPW59D4xY2mxgR1ENc2bGtZSxshS6TP4pLW9oRdzouH56NwZvGStcuU7UiCJmJ133qJZQXrEzaoMpXqB6pP",
  "key33": "42VrJeQVcnThjyjCsGBBvVXQ4V9VFynux5xF6QpEeC8Q1AsJMc7P1sS2vxfd5vvZhKYGD67Mr8W1w7tDZCfPx2cC"
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
