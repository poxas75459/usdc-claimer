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
    "5N3YGrgBX7nRjbLXTe7TVzuEDidYHGXgnNEeBkGMVMmTMU3J9U5tJ2sMDv2JTtuNg2ooQxJTHmLTXXGHSCTMBc16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tdq1HuKBA666TBXyi3SdJB4PpLij2ivYrHYBD9zFMu6cUejULDtsrnvaay4eaBTn5wgHyVbGtyM5jTphzZVcCw",
  "key1": "4oWWv7EH7GrArSD3qZ54C858SzGPFoEH2BcYNssCwui4AAvT3P3XKKWTxAjFVqfjwRQCiDV1x49GiLrq2n6w1sLu",
  "key2": "3NLuXLtPupMXgxd7jHH2YpDHab4HA24ftEGzPiuCnZ8Gn276zMoUD5q41K4jriRhgtDD3PmBUvcxxcAMmuiAWRMX",
  "key3": "2pRa4vHmq2AFkXaeRAsmj92X3WK3F7NsMxTofeJ5x9gTDXBMg17erbrLLtJJNFiLvJboxNgVDQKmFDjwNoqznT3m",
  "key4": "2UQsxumxnoEMS65nvKGpD4cqtah8CWuMgHrePHBFYBSMpC9SWTbx44FXDJvtka2zURcSVMA5WEE3oG4GjkFjPZrD",
  "key5": "3cCerWQ5jF4JZbvPBuwT8Xv4wJ6Pfi8Sjt3B3kNxD6zVV4uwFHM3475LzDGvwHWcrCT63XwkrHtmhdrxcnyfuuqN",
  "key6": "4R7tf82Cout2Yd9zr5PJ218fyetxpAptNnBvnJxGp4B4eoHg6icYELCWGzcTVT3kUeEARvkzk6NnNBrQVi8VF88K",
  "key7": "37g4LgMacCLaDU9hAP4k213wqWspqDrwtY8nuXFLK7okVhrCcLV5MBQM9qfGscvFpLBDTQBQZUK3A9QoG16Y2q97",
  "key8": "2Ji7KgTqatW3KiJgTnt2zTLTBUHC44AkH3eKGNqjGzcmYRQoQL12yE1xb2xY2rRBaTiyhYfh6SKEkuXb2jusSs2c",
  "key9": "4BTm5EQVg34xkKoV2TFNuZbhsgZcPMynNT4LkDYJASsHqFE3ogcnCqsJNcx6e6kyq6PSRNgxFJP3f6bXDEiUyepP",
  "key10": "2q8CjPdCcKdQceoL2RczmE39knA3o6iyr24sD2qvhL4iSZsYAE4BY5K2bdcFah5XevzgdVfJ292VN72qEoe91cva",
  "key11": "5ueYSZ8fz3es15sz9meeMJVcSHXR9LFEYgn5JAfokGG3RcrrCHYoAqJGMqGuC39N2VLT6w3XPsAREkzfFppx856A",
  "key12": "52SCLqVhjEXVMvx5GgBxLUPZaUDqq75BBatiaFxwvyRAfLp86svzuSYDJjbAUwMLk8dPBxdMmj4ptaFjx1jAr7u6",
  "key13": "5hRAaDcA17rPupBLWAesWKAyJ2yysDod3uqhgtaW48RoUSxFfADxGJRbWjJA1B6BWVJZVLRN53PfbhWaT7ZdjW8y",
  "key14": "4fE38vS543pHoiVFcoNkSUWkYkLLtTG58GHrY7drfpRrvQopboYMhNXwqM1vDhgBEVQKHTNem97TKifaYB8GTTin",
  "key15": "2v5rkWkQp48S8EriUcgSGXD1fbtpgEVLH714nCM1RgKjpyk2Ku3kTPw8a9h7XF1xAPS1wVaDbnXJ46PAhawsuCPS",
  "key16": "5uhi1tpCYvpHtLYoPaGVN9MW7LfJns7CnrFovaCERBuinEe7QbeBgdURGAbq4dNVhGepRTD8tCtXtcBJap52ANfx",
  "key17": "5VhVPs1R4wkL8naMShwqQ33gLZ6SJsqNLFYyEJ2hJqKVD1PRhnbuw2xb8jkRvqbGCNs1MrcmFUmUfrPA9HYtgTxa",
  "key18": "3zweuZSWscBRqht5VbTPyvmixvDRVdTzpWanLYx8Lim62HfH4TVnMrLDLeVeXoaPGkEuY4wdTKm3xArYYPuPj6UJ",
  "key19": "4kFUn8QbRjLVWBPchJPJdQXAmhc8WVPCnUmnWTgv8Kf1quCaR2pmoMJ8DfiQBRLWXyDsQX3RhnqzeQLLexY9bB1D",
  "key20": "DDtVX7sVyiLdPYHF6ckQcAvP5ZUVA2xAjuhoWNAawHxWtTNsk7o6WtqXhqxf4FQoSegsNHixpJbfoZVP4JPiwAD",
  "key21": "dazn5nKDYXttpWci3yvXPzvX9N3KmCBumTahTxJhbbSbQmWRvZkQ3F9SiRKf4pb42SrmPPmMuQTb39GGz85qu33",
  "key22": "T7Zh1YDKqscYjKSb9N95xxc3fSvYZV3uK8rbpZVSsn3aW5eZVj3kZP6DnbJc5hvEHgEaWLJzZJda8eTUjtExw6b",
  "key23": "21tB2F5bjNUBUM7c4wnAdBQGauQkQq5fSnXvBZ5cY5Hmwv4gWBVcN1d1DXgtKdFbDdEKTN1cEU4T7A8Kza7vyLu4",
  "key24": "5AzLZeV6TuYSeNoBmrcLb323WZimQTx3JvUVGwnAUuKeHcWJJqqWjiFiFqyU8NttpSRn9AWYiNCY18rxSn9fE3r7",
  "key25": "5pE35ZKxPTdt12hwtVo6wHncVEBA3iJtnnjJWzQPk6DzS8QzSTrgdbKfugjS3ePUEoji2SS7f3ALgKFrqexhgYQJ",
  "key26": "3pXpm438uEiFschX3LZxP6mQ3yBcyzgpeaHLgpAe7GPtKswHUKtoywr1iz8CYNYzcGCfBUR5tGGS7SLPL4gKVX7y",
  "key27": "5fRAfjDns18zEkm8rU3SVhUZAmcdbyfjKErWFAhkkhDPUFN1Kvny2ZEieobS3zyXufwhwKmH1tWvvsEvgm2j6ou8",
  "key28": "EbHt27TjasMKPzawRzEHrf2QA7xKg87RZWwGdx7GQtgkirVbGyukEiA76ryygxwPh9EwvCCvCwCtXm8K9nxSRiD",
  "key29": "36kvf7v4gYqzv9iAdra9XheESGk4CDstbg982yYrY55AySFioUTXozy5amMQBQzPDfN5Prb9LR4siS5aWUdn65nC",
  "key30": "5Z3AVhrpRhTFPAEG6ns3UqT7GxEDgjo1wvrJmMTUTekcFn27yNZfBtGqci98wS6DewNmepCetRcKAcjjfrNgs8j2",
  "key31": "3Zd6oWU61wPjkfcBLR9oh7Ryfq6iayPhm3RSV5gfKrdiyCZoRSjcw9qDouf2wUsDnLJxDT9i5TnBwDAUTBaXtAS4",
  "key32": "3ghxwtJpBYpdr5TQwL3ToPpV76kHCePyWtyMDjdJaPX71ZJGZhynsgVtFfqXqedjDF8RZ7c89Ku8KuLzmfbowi7x",
  "key33": "3dNJRuuTTmDFfZa2Dz28YcsGuW34ATWa9CPtcSbCvXbngwUYQhHYCMTnW6m3PYF5FtBhvDhg65rGxLn7Q2nS8SEv",
  "key34": "5VfFgp3WZmJntbn4WWFzv8R4Tjzqg3uAbWXHLHLMa1hy6JHQQMTtitvn7GXrPodCTv8b5ZX8kBrFhEQVaMM9JRvA",
  "key35": "3g4pYZ9R9qgQ69KkGaHcE2ovAMS8e3QaAFcvxKuyW2ohX72YqFNSNiE6kYiApUMFbZA4n1HTiPqLwGw3wXsgyHaY",
  "key36": "4cVgo3E32gwWfb6kbdFqhK6LDH3oMmU86fRXXqtDbD73vd9fWaCTDhr6dVtUBSRduFrcHcYBaM3sqEinZsaZKHRz",
  "key37": "5gfhopy85JiBJb2cGinUPHSw34G9nbU2CagCDXe5FMBysDU9EdtJwmyrgKapyUpsB48Rkv16sZ63QDdgN22Y5H3M"
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
